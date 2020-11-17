import fetch from "isomorphic-fetch";
import Dexie from "dexie";
import { Boards } from "./dto/boards.dto";
import type { Either } from "fp-ts/lib/Either";
import { flow } from "fp-ts/lib/function";
import { either } from "fp-ts";

const CORS_PROXY_URL = "https://api.codetabs.com/v1/proxy/?quest=";

export const loadBoards = (): Promise<Either<Error, Boards>> =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/boards.json`)
    .then((res) => res.json())
    .then(flow(Boards.asDecoder().decode, either.mapLeft(either.toError)));

// TODO: add union literals...
export const loadBoard = (board: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/catalog.json`);

export const loadBoardIndex = (board: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/index.json`);

export const loadThread = (board: string, thread: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/res/${thread}.json`);

export const db = new Dexie("app");

db.version(3).stores({
  boards: "&id,category,info,name",
  updates: "name",
  threadsUpdate: "&id,board,lastUpdate",
  threads: "&id,board",
});

export const addThreadToWatchlist = (
  threadId: string,
  boardName: string,
  posts: any
) => {
  db.table("threads").put({ id: threadId, board: boardName, posts });
};

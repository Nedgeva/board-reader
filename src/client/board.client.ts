import fetch from "isomorphic-fetch";

const CORS_PROXY_URL = "https://api.codetabs.com/v1/proxy/?quest=";

export const loadBoards = () =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/boards.json`);

// TODO: add union literals...
export const loadBoard = (board: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/catalog.json`);

export const loadBoardIndex = (board: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/index.json`);

export const loadThread = (board: string, thread: string) =>
  fetch(`${CORS_PROXY_URL}https://2ch.hk/${board}/res/${thread}.json`);

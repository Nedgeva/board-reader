import * as t from "io-ts";

export interface Boards {
  boards?: BoardsEntity[] | null;
  global_boards: number;
  global_posts: string;
  global_speed: string;
  is_index: number;
  tags?: TagsEntity[] | null;
  type: number;
}
export interface BoardsEntity {
  bump_limit: number;
  category: string;
  default_name: string;
  enable_names: number;
  enable_sage: number;
  id: string;
  info: string;
  last_num: number;
  name: string;
  speed: number;
  threads: number;
  unique_posters: number;
}
export interface TagsEntity {
  board: string;
  tag: string;
}

const Boards = t.intersection([
  t.type({
    global_boards: t.number,
    global_posts: t.string,
    global_speed: t.string,
    is_index: t.number,
    type: t.number,
  }),
  t.partial({
    boards: t.union([
      t.undefined,
      t.null,
      t.array(
        t.type({
          bump_limit: t.number,
          category: t.string,
          default_name: t.string,
          enable_names: t.number,
          enable_sage: t.number,
          id: t.string,
          info: t.string,
          last_num: t.number,
          name: t.string,
          speed: t.number,
          threads: t.number,
          unique_posters: t.number,
        })
      ),
    ]),
    tags: t.union([
      t.undefined,
      t.null,
      t.array(t.type({ board: t.string, tag: t.string })),
    ]),
  }),
]);

const BoardsEntity = t.type({
  bump_limit: t.number,
  category: t.string,
  default_name: t.string,
  enable_names: t.number,
  enable_sage: t.number,
  id: t.string,
  info: t.string,
  last_num: t.number,
  name: t.string,
  speed: t.number,
  threads: t.number,
  unique_posters: t.number,
});

const TagsEntity = t.type({ board: t.string, tag: t.string });
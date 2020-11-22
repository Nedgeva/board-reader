import * as t from "io-ts";

export interface Thread {
  Board: string;
  BoardInfo: string;
  BoardInfoOuter: string;
  BoardName: string;
  advert_bottom_image: string;
  advert_bottom_link: string;
  advert_mobile_image: string;
  advert_mobile_link: string;
  advert_top_image: string;
  advert_top_link: string;
  board_banner_image: string;
  board_banner_link: string;
  bump_limit: number;
  current_thread: string;
  default_name: string;
  enable_dices: number;
  enable_flags: number;
  enable_icons: number;
  enable_images: number;
  enable_likes: number;
  enable_names: number;
  enable_oekaki: number;
  enable_posting: number;
  enable_sage: number;
  enable_shield: number;
  enable_subject: number;
  enable_thread_tags: number;
  enable_trips: number;
  enable_video: number;
  files_count: number;
  is_board: number;
  is_closed: number;
  is_index: number;
  max_comment: number;
  max_files_size: number;
  max_num: number;
  news_abu?: NewsAbuEntity[] | null;
  posts_count: number;
  thread_first_image: string;
  threads?: ThreadsEntity[] | null;
  title: string;
  top?: TopEntity[] | null;
  unique_posters: string;
}
export interface NewsAbuEntity {
  date: string;
  num: number;
  subject: string;
  views: number;
}
export interface ThreadsEntity {
  posts?: PostsEntity[] | null;
}
export interface PostsEntity {
  banned: number;
  closed: number;
  comment: string;
  date: string;
  email: string;
  endless: number;
  files?: (FilesEntity | null)[] | null;
  lasthit: number;
  name: string;
  num: number;
  number: number;
  op: number;
  parent: string;
  sticky: number;
  subject: string;
  tags?: string | null;
  timestamp: number;
  trip: string;
}
export interface FilesEntity {
  displayname: string;
  fullname: string;
  height: number;
  md5: string;
  name: string;
  nsfw: number;
  path: string;
  size: number;
  thumbnail: string;
  tn_height: number;
  tn_width: number;
  type: number;
  width: number;
}
export interface TopEntity {
  board: string;
  info: string;
  name: string;
}

const Thread = t.intersection([
  t.type({
    Board: t.string,
    BoardInfo: t.string,
    BoardInfoOuter: t.string,
    BoardName: t.string,
    advert_bottom_image: t.string,
    advert_bottom_link: t.string,
    advert_mobile_image: t.string,
    advert_mobile_link: t.string,
    advert_top_image: t.string,
    advert_top_link: t.string,
    board_banner_image: t.string,
    board_banner_link: t.string,
    bump_limit: t.number,
    current_thread: t.string,
    default_name: t.string,
    enable_dices: t.number,
    enable_flags: t.number,
    enable_icons: t.number,
    enable_images: t.number,
    enable_likes: t.number,
    enable_names: t.number,
    enable_oekaki: t.number,
    enable_posting: t.number,
    enable_sage: t.number,
    enable_shield: t.number,
    enable_subject: t.number,
    enable_thread_tags: t.number,
    enable_trips: t.number,
    enable_video: t.number,
    files_count: t.number,
    is_board: t.number,
    is_closed: t.number,
    is_index: t.number,
    max_comment: t.number,
    max_files_size: t.number,
    max_num: t.number,
    posts_count: t.number,
    thread_first_image: t.string,
    title: t.string,
    unique_posters: t.string,
  }),
  t.partial({
    news_abu: t.union([
      t.undefined,
      t.null,
      t.array(
        t.type({
          date: t.string,
          num: t.number,
          subject: t.string,
          views: t.number,
        })
      ),
    ]),
    threads: t.union([
      t.undefined,
      t.null,
      t.array(
        t.partial({
          posts: t.union([
            t.undefined,
            t.null,
            t.array(
              t.intersection([
                t.type({
                  banned: t.number,
                  closed: t.number,
                  comment: t.string,
                  date: t.string,
                  email: t.string,
                  endless: t.number,
                  lasthit: t.number,
                  name: t.string,
                  num: t.number,
                  number: t.number,
                  op: t.number,
                  parent: t.string,
                  sticky: t.number,
                  subject: t.string,
                  timestamp: t.number,
                  trip: t.string,
                }),
                t.partial({
                  files: t.union([
                    t.undefined,
                    t.null,
                    t.array(
                      t.union([
                        t.null,
                        t.type({
                          displayname: t.string,
                          fullname: t.string,
                          height: t.number,
                          md5: t.string,
                          name: t.string,
                          nsfw: t.number,
                          path: t.string,
                          size: t.number,
                          thumbnail: t.string,
                          tn_height: t.number,
                          tn_width: t.number,
                          type: t.number,
                          width: t.number,
                        }),
                      ])
                    ),
                  ]),
                  tags: t.union([t.undefined, t.null, t.string]),
                }),
              ])
            ),
          ]),
        })
      ),
    ]),
    top: t.union([
      t.undefined,
      t.null,
      t.array(t.type({ board: t.string, info: t.string, name: t.string })),
    ]),
  }),
]);

const NewsAbuEntity = t.type({
  date: t.string,
  num: t.number,
  subject: t.string,
  views: t.number,
});

const ThreadsEntity = t.partial({
  posts: t.union([
    t.undefined,
    t.null,
    t.array(
      t.intersection([
        t.type({
          banned: t.number,
          closed: t.number,
          comment: t.string,
          date: t.string,
          email: t.string,
          endless: t.number,
          lasthit: t.number,
          name: t.string,
          num: t.number,
          number: t.number,
          op: t.number,
          parent: t.string,
          sticky: t.number,
          subject: t.string,
          timestamp: t.number,
          trip: t.string,
        }),
        t.partial({
          files: t.union([
            t.undefined,
            t.null,
            t.array(
              t.union([
                t.null,
                t.type({
                  displayname: t.string,
                  fullname: t.string,
                  height: t.number,
                  md5: t.string,
                  name: t.string,
                  nsfw: t.number,
                  path: t.string,
                  size: t.number,
                  thumbnail: t.string,
                  tn_height: t.number,
                  tn_width: t.number,
                  type: t.number,
                  width: t.number,
                }),
              ])
            ),
          ]),
          tags: t.union([t.undefined, t.null, t.string]),
        }),
      ])
    ),
  ]),
});

const PostsEntity = t.intersection([
  t.type({
    banned: t.number,
    closed: t.number,
    comment: t.string,
    date: t.string,
    email: t.string,
    endless: t.number,
    lasthit: t.number,
    name: t.string,
    num: t.number,
    number: t.number,
    op: t.number,
    parent: t.string,
    sticky: t.number,
    subject: t.string,
    timestamp: t.number,
    trip: t.string,
  }),
  t.partial({
    files: t.union([
      t.undefined,
      t.null,
      t.array(
        t.union([
          t.null,
          t.type({
            displayname: t.string,
            fullname: t.string,
            height: t.number,
            md5: t.string,
            name: t.string,
            nsfw: t.number,
            path: t.string,
            size: t.number,
            thumbnail: t.string,
            tn_height: t.number,
            tn_width: t.number,
            type: t.number,
            width: t.number,
          }),
        ])
      ),
    ]),
    tags: t.union([t.undefined, t.null, t.string]),
  }),
]);

const FilesEntity = t.type({
  displayname: t.string,
  fullname: t.string,
  height: t.number,
  md5: t.string,
  name: t.string,
  nsfw: t.number,
  path: t.string,
  size: t.number,
  thumbnail: t.string,
  tn_height: t.number,
  tn_width: t.number,
  type: t.number,
  width: t.number,
});

const TopEntity = t.type({ board: t.string, info: t.string, name: t.string });

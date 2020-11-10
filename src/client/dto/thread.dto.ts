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

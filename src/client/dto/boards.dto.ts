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

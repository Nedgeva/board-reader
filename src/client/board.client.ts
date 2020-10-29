export const loadBoards = () =>
  fetch("https://cors-anywhere.herokuapp.com/https://2ch.hk/boards.json");

// TODO: add union literals...
export const loadBoard = (board: string) =>
  fetch(
    `https://cors-anywhere.herokuapp.com/https://2ch.hk/${board}/catalog.json`
  );

export const loadThread = (board: string, thread: string) =>
  fetch(
    `https://cors-anywhere.herokuapp.com/https://2ch.hk/${board}/res/${thread}.json`
  );

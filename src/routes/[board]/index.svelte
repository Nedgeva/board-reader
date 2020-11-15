<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";
  import { loadBoardIndex } from "../../client/board.client";

  const getBoardData = (board: string) =>
    loadBoardIndex(board).then((res) => res.json());

  export const preload: Preload.Preload = async function (page) {
    const { board } = page.params;
    const { threads } = await getBoardData(page.params.board);
    return { board, threads };
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { formatShortTimestamp } from "../../utils/date.utils";

  export let board;
  export let threads;

  onMount(async () => {
    /*  */
  });
</script>

<svelte:head>
  <title>Board Reader / {board}</title>
</svelte:head>

<h1>Ты находишься в: /{board}/ board threads</h1>

<strong>
  {#if threads}
    {#each threads as thread (thread.thread_num)}
      <div>
        <h3>>>{thread.thread_num} {thread.posts[0].subject}</h3>
        <time>{formatShortTimestamp(thread.posts[0].timestamp)}</time>
        <p>
          {@html thread.posts[0].comment}
        </p>
        {#each thread.posts.slice(1) as post (post.num)}
          <small>
            {@html post.comment}
            <br />
          </small>
        {/each}
        <a href="/{board}/{thread.thread_num}">Go to thread >>{thread.thread_num}</a>
        <hr />
      </div>
    {/each}
  {/if}
</strong>

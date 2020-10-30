<script lang="ts">
  import { onMount } from "svelte";
  import * as sapper from "@sapper/app";
  import { derived } from "svelte/store";
  import { loadBoardIndex } from "../../client/board.client";
  import { formatShortTimestamp } from "../../utils/date.utils";

  // TODO: add typings here
  const { page } = sapper.stores();

  const board = derived(page, ($page) => $page.params.board);

  let threads;

  const getBoardData = async () => {
    const boardData = await loadBoardIndex($board).then((res) => res.json());
    threads = boardData.threads;
  };

  getBoardData();

  onMount(async () => {
    /*  */
  });
</script>

<svelte:head>
  <title>Board Reader / {$board}</title>
</svelte:head>

<h1>You're seeing /{$board}/ board threads</h1>

<strong>
  {#if threads}
    {#each threads as thread (thread.thread_num)}
      <div>
        <h3>{thread.posts[0].subject}</h3>
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
        <a href="/{$board}/{thread.thread_num}">>>{thread.thread_num}</a>
        <hr />
      </div>
    {/each}
  {/if}
</strong>

<script lang="ts">
  import { onMount } from "svelte";
  import * as sapper from "@sapper/app";
  import { derived } from "svelte/store";
  import { loadBoard } from "../../client/board.client";

  // TODO: add typings here
  const { page } = sapper.stores();

  const board = derived(page, ($page) => $page.params.board);

  let threads;

  onMount(async () => {
    const boardData = await loadBoard($board).then((res) => res.json());

    console.log(boardData);

    threads = boardData.threads;
  });
</script>

<svelte:head>
  <title>Board Reader / {$board}</title>
</svelte:head>

<h1>You're caught up in /{$board}/ trap!</h1>

<strong>
  {#if threads}
    {#each threads as thread (thread.num)}
      <div>
        <h3>{thread.subject}</h3>
        <time>{thread.timestamp}</time>
        <p>
          {@html thread.comment}
        </p>
        <a href="/{$board}/{thread.num}">>>{thread.num}</a>
        <hr />
      </div>
    {/each}
  {/if}
</strong>

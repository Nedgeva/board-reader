<script lang="ts">
  import { onMount } from "svelte";
  import { loadBoards } from "../client/board.client";

  // TODO: typings here io-ts
  let boards;

  const getBoardsData = async () => {
    const resp = await loadBoards().then((res) => res.json());
    boards = resp.boards;
  };

  getBoardsData();

  onMount(async () => {
    /* compare with cached/db data */
  });
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Boards list:</h1>

<ul>
  <strong>
    {#if boards}
      {#each boards as { name, id }}
        <li><a href="/{id}">{name}</a></li>
      {/each}
    {/if}
  </strong>
</ul>

<style type="text/scss">
	@import '../scss/main.scss';
</style>

<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";
  import { loadBoards } from "../client/board.client";

  const getBoardsData = () => loadBoards().then((res) => res.json());

  export const preload: Preload.Preload = async function () {
    return await getBoardsData();
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";

  // TODO: typings here io-ts
  export let boards;

  onMount(async () => {
    /* compare with cached/db data */
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Список досок:</h1>

<ul class="boards-list">
  {#if boards}
    {#each boards as { name, id }}
      <li class="boards-list__item"><a class="boards-list__link" href="/{id}">{name}</a></li>
    {/each}
  {/if}
</ul>

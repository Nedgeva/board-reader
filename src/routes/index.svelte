<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";
  import { loadBoards } from "../client/board.client";

  export const preload: Preload.Preload = async function () {
    return await loadBoards();
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import type { Boards } from "../client/dto/boards.dto";

  // TODO: typings here io-ts
  export let boards: Boards;

  onMount(async () => {
    /* compare with cached/db data */
  });
</script>

<style type="text/scss">
  @import "../scss/main.scss";
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Список досок:</h1>

<ul class="boards-list">
  {#if boards}
    {#each boards.boards as { name, id }}
      <li class="boards-list__item">
        <a class="boards-list__link" href="/{id}">{name}</a>
      </li>
    {/each}
  {/if}
</ul>

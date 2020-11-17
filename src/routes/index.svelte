<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";
  import { loadBoards } from "../client/board.client";

  export const preload: Preload.Preload = async function () {
    const boards = await loadBoards();
    return { boards };
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { either } from "fp-ts";
  import type { Either } from "fp-ts/lib/Either";
  import type { Boards } from "../client/dto/boards.dto";

  export let boards: Either<Error, Boards>;

  onMount(async () => {
    /* TODO: compare with cached/db data */
  });
</script>

<style type="text/scss">
  @import "../scss/main.scss";
</style>

<svelte:head>
  <title>Добро пожаловать. Снова.</title>
</svelte:head>

<h1>Список досок:</h1>

<ul class="boards-list">
  {#if either.isRight(boards)}
    {#each boards.right.boards as { name, id }}
      <li class="boards-list__item">
        <a class="boards-list__link" href="/{id}">{name}</a>
      </li>
    {/each}
  {/if}
</ul>

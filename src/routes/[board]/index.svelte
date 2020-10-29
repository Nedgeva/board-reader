<script lang="ts">
  import * as sapper from "@sapper/app";
  import { derived } from "svelte/store";

  // TODO: add typings here
  const { page } = sapper.stores();

  const board = derived(page, ($page) => $page.params.board);
  console.log("hello", $board);
</script>

<svelte:head>
  <title>Board Reader / {$board}</title>
</svelte:head>

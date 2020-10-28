<script lang="ts">
  import { stores } from "@sapper/app";
  import { derived } from "svelte/store";

  const { page } = stores();

  const board = derived(page, ($page) => $page.params.board);
  console.log("hello", $board);
</script>

<svelte:head>
  <title>Board Reader / {$board}</title>
</svelte:head>

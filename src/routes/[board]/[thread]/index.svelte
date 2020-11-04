<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";
  import { loadThread } from "../../../client/board.client";

  const getPostsData = (board: string, thread: string) =>
    loadThread(board, thread)
      .then((res) => res.json())
      .then((threadData) => threadData.threads[0]);

  export const preload: Preload.Preload = async function (page) {
    const { board, thread } = page.params;
    const { posts } = await getPostsData(board, thread);
    return { board, thread, posts };
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { formatShortTimestamp } from "../../../utils/date.utils";

  export let board;
  export let thread;
  export let posts;

  onMount(async () => {
    /* compare with cached data */
  });
</script>

<svelte:head>
  <title>Board Reader /{board}/ {thread}</title>
</svelte:head>

<h1>Welcome to {thread} thread in /{board}/ thread</h1>

<strong>
  {#if posts}
    {#each posts as post (post.num)}
      <div>
        <h3>{post.subject}</h3>
        <time>{formatShortTimestamp(post.timestamp)}</time>
        <p>
          {@html post.comment}
        </p>
        {#if post.files}
          <ul>
            {#each post.files as file (file.thumbnail)}
              <li><small>{file.path}</small></li>
            {/each}
          </ul>
        {/if}
        <hr />
      </div>
    {/each}
  {/if}
</strong>

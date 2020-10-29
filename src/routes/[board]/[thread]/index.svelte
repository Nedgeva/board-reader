<script lang="ts">
  import { onMount } from "svelte";
  import * as sapper from "@sapper/app";
  import { derived } from "svelte/store";
  import { loadThread } from "../../../client/board.client";
  import { formatShortTimestamp } from "../../../utils/date.utils";

  // TODO: add typings here
  const { page } = sapper.stores();

  const board = derived(page, ($page) => $page.params.board);
  const thread = derived(page, ($page) => $page.params.thread);

  let posts;

  onMount(async () => {
    const threadData = await loadThread($board, $thread).then((res) =>
      res.json()
    );

    console.log(threadData.threads[0].posts);

    posts = threadData.threads[0].posts;
  });
</script>

<svelte:head>
  <title>Board Reader /{$board}/ {$thread}</title>
</svelte:head>

<h1>Welcome to {$thread} thread in /{$board}/ thread</h1>

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

<script lang="ts" context="module">
  import type { Preload } from "@sapper/common";

  export const preload: Preload.Preload = async function (page) {
    const pageCleaned = page.params.post.endsWith(".html")
      ? page.params.post.slice(0, -5)
      : page.params.post;

    return this.redirect(302, `${page.params.board}/${pageCleaned}`);
  };
</script>

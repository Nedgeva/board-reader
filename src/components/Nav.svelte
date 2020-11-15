<script lang="ts">
	export let segment: string;
</script>

<style type="text/scss">
	@import '../scss/main.scss';
</style>

<div class="navigation">
	<div class="navigation__container container">
		<a class="logo" href="." title="">
			<img class="logo__image" src="/logo.png" alt="logo" />
		</a>
		<ul class="navigation__list">
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Главная</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">О нас</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Блог</a></li>
		</ul>
	</div>
</div>

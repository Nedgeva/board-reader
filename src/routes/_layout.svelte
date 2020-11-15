<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style type="text/scss">
	@import '../scss/main.scss';
</style>

<Nav {segment}/>

<div class="container">
	<slot></slot>
</div>
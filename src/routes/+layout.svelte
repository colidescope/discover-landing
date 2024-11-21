<script lang="ts">
	import { onMount, tick } from 'svelte';
	import '../app.css';
	import { goToPage } from '../lib/utils';

	function handleClick() {
		goToPage('https://colidescope.github.io/discover/');
	}

	// Add the event listener when the component is mounted
	onMount(() => {
		// Cleanup the event listener when the component is destroyed
		return () => {};
	});
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<img src="200406_discover_logo.svg" on:click={handleClick} />
	</div>
	<slot />
	<div class="button-container">
		<button class="primary" on:click={handleClick}>Get Discover</button>
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 1000px;
		margin: 0 auto;

		.logo-wrapper {
			max-width: 300px;
			margin: 1rem auto;
			padding: 2rem 1rem;
			display: flex;
			align-items: flex-start;
			cursor: pointer;
		}

		.button-container {
			box-sizing: border-box;
			width: 100%;
			padding: 4rem;
			display: flex;
			justify-content: center;
		}
	}
</style>

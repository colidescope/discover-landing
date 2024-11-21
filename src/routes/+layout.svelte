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
	<slot />
	<div class="button-container">
		<button class="primary" on:click={handleClick}>Get Discover</button>
	</div>
</div>

<style lang="scss">
	.wrapper {
		max-width: 1000px;
		margin: 0 auto;

		.button-container {
			width: 100%;
			padding: 2rem;
			display: flex;
			justify-content: center;
		}
	}
</style>

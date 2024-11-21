<script lang="ts">
	import { onMount, tick } from 'svelte';
	import '../app.css';

	// Add the event listener when the component is mounted
	onMount(() => {
		// Cleanup the event listener when the component is destroyed
		return () => {};
	});
</script>

<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>

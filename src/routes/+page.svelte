<script lang="ts">
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<img src="200406_discover_logo.svg" />
	</div>
	<div class="sections-wrapper">
		<div class="section">
			<img src="Discover_01_3.png" />
		</div>
		<div class="section">
			<img src="Discover_01_3.png" />
		</div>
	</div>
</div>

<style lang="scss">
	.logo-wrapper {
		max-width: 300px;
		margin: 1rem auto;
		padding: 2rem 1rem;
		display: flex;
		align-items: flex-start;
	}

	.sections-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.section {
			display: flex;
			img {
				width: 100%; // Ensure the image scales with its container
				height: auto; // Maintain aspect ratio
				object-fit: cover; // Optional: control how the image fits its container
			}
		}
	}
</style>

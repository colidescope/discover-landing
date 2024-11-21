<script lang="ts">
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<img src="200406_discover_logo.svg" />
	</div>
	<div class="sections-wrapper">
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_01_3.png" />
			</div>
			<div class="description">
				<div class="title"><u>Connect</u> your existing design models</div>
				<div class="body">
					Discover is designed to connect seamlessly to your Grasshopper models, with minimal
					overhead required for taking an existing model and setting it up for optimization. A small
					set of components handle connecting your model to the Discover server, and specifying the
					inputs and outputs passed between your model and Discover. Meanwhile, all optimization and
					visualization tasks are handled in an external, web-based platform.
				</div>
			</div>
		</div>
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_01_3.png" />
			</div>
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
		gap: 2rem;

		.section {
			position: relative;
			display: flex;
			gap: 2rem;

			img {
				width: 100%; // Ensure the image scales with its container
				height: 100%;
				// height: auto; // Maintain aspect ratio
				object-fit: cover; // Optional: control how the image fits its container
			}

			.img-wrapper {
				min-width: 65%;
				max-width: 65%;
			}

			.description {
				// max-width: 35%;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				// padding: 1rem;

				.title {
					font-size: 18pt;
					line-height: 24pt;
					font-weight: 700;
				}

				.body {
					font-family: 'Poppins', sans-serif;
					font-weight: 500;
					font-style: normal;
				}
			}
		}
	}

	@media (max-width: 1000px) {
		.sections-wrapper {
			.section {
				.img-wrapper {
					min-width: 100%;
					max-width: 100%;
				}
				.description {
					position: absolute;
					bottom: 0;
					padding: 2rem;
					background-color: rgba(255, 255, 255, 0.75);
				}
			}
		}
	}

	@media (max-width: 700px) {
		.sections-wrapper {
			.section {
				flex-direction: column;
				.img-wrapper {
				}
				.description {
					position: relative;
					background-color: rgba(255, 255, 255, 0);
				}
			}
		}
	}
</style>

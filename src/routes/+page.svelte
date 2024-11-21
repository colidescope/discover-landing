<script lang="ts">
</script>

<div class="wrapper">
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
				<img src="Discover_02.png" />
			</div>
			<div class="description">
				<div class="title"><u>Generate</u> input parameters</div>
				<div class="body">
					Discover supports a range of input parameter types to drive your generative models. This
					includes <strong>Continuous</strong> parameters for variables that vary continuously,
					<strong>Categorical</strong>
					parameters for values that take on one of several defined options, and a special
					<strong>Sequence</strong> parameter which defines a unique ordering of a set of items.
				</div>
			</div>
		</div>
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_03.png" />
			</div>
			<div class="description">
				<div class="title"><u>Define</u> objectives and constraints</div>
				<div class="body">
					Discover supports both single and multi-objective optimization workflows, and has full
					support for constraint handling. Objectives and constraints can be easily defined by
					connecting output values from your models into a special set of <strong>Objective</strong>
					and <strong>Constraint</strong>
					components. Context menus within the components allow you to select the type of objective (minimize
					or maximize), or the type of constraint (less than, greater than, or exactly matching a specified
					value) you want to use.
				</div>
			</div>
		</div>
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_04.png" />
			</div>
			<div class="description">
				<div class="title"><u>Run</u> optimizations</div>
				<div class="body">
					Once you've specified the inputs, objectives, and constraints you wish you use in your
					model, you can use Discover's web-based interface to run optimization jobs. The <strong
						>Run Options panel</strong
					>
					allows you to specify the parameters of your optimization job, including the number of designs
					to create in each generation, the number of generations to produce, and the mutation rate to
					use when generating new designs.
				</div>
			</div>
		</div>
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_05.png" />
			</div>
			<div class="description">
				<div class="title"><u>Reveal</u> complex trade-offs</div>
				<div class="body">
					Discover's visualization interface is based around a 4-d scatter plot which you can use to
					monitor an ongoing optimization or to evaluate the results of a previously run
					optimization. Each valid design is displayed as a circle, while designs that violate one
					or more constraints are displayed as hollow squares. The <strong>Explore panel</strong> allows
					you to map any objective value to the four dimensions of the scatter plot (x-coordinate, y-coordinate,
					circle size and color). You can also visualize the design or generation number to evaluate
					optimization trends over time.
				</div>
			</div>
		</div>
		<div class="section">
			<div class="img-wrapper">
				<img src="Discover_06_01.png" />
			</div>
			<div class="description">
				<div class="title"><u>Explore</u> a wide space of design</div>
				<div class="body">
					Discover supports a bi-directional data flow with your Rhino Grasshopper model. Once an
					optimization is run, you can use the scatter plot to explore the set of designs in your
					design space, filter to show only the best-performing designs, and select a set of designs
					for further analysis. Clicking on any design in the <strong>Designs panel</strong> will automatically
					regenerate it in your Grasshopper model so you can proceed with the rest of your design workflow.
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
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
				border-radius: 16px;
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
					font-size: 16pt;
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
				img {
					border-radius: 0;
				}
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

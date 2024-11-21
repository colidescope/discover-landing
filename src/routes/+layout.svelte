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
	$window-height: 100vh;

	$top-bar-height: 3.5rem;
	$top-bar: $top-bar-height - 2rem;
	$divider-height: 0.125rem;
	$menu-content-gap: 0;

	$top-menu-height-lg: 15rem;
	$top-menu-height-sm: 30rem;

	$top-menu-offset-lg: -1 * ($top-menu-height-lg - $top-bar-height);
	$top-menu-offset-sm: -1 * ($top-menu-height-sm - $top-bar-height);

	$content-offset-lg: $top-menu-height-lg + $menu-content-gap;
	$content-offset-sm: $top-menu-height-sm + $menu-content-gap;

	.message-box {
		// border-radius: 0.5rem;
		margin-bottom: 1rem;
		padding: 0.25rem;
		display: flex;

		// flex-wrap: wrap;
		align-items: stretch;
		// justify-content: space-between;
		// min-height: 75px;
		.message {
			flex-grow: 1;
			// padding: 0.75rem 0;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 1rem;
		}
		.close-container {
			height: 100%;
		}
	}
	.warning {
		// background-color: rgba(255, 234, 0, 0.25);
		color: #bbbbbb;
	}
	.error {
		// background-color: #ff440010;
		// background-color: #00ffdd40;
		color: #ff4400;
	}
	.two-col {
		display: flex;
		justify-content: flex-end;
		gap: 2rem;
		.col {
			flex: 1 0 0;
			max-width: 360px;
			.login-form {
				display: flex;
				flex-direction: column;
				align-items: stretch;
				gap: 1rem;
				.form-section {
					display: flex;
					align-items: center;
					gap: 1rem;
					.label {
						width: 100px;
					}
					.button-group {
						display: flex;
						flex-grow: 1;
						justify-content: space-between;
						button {
							flex: 1;
							text-align: left;
						}
					}
					input {
						flex-grow: 1;
					}
				}
			}
		}
		.min {
			min-width: 360px;
		}
		p {
			margin-top: 0;
		}
		p:last-child {
			margin-bottom: 0;
		}
	}
	.menu {
		position: absolute;
		top: $top-menu-offset-lg;
		left: 0;
		right: 0;
		width: 100%;
		min-height: $top-menu-height-lg;
		max-height: $top-menu-height-lg;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		background-color: var(--color-bg-0-dark);
		color: #fff;

		// transition: top 0.5s ease-in-out;
		transition: top 0.1s;
		z-index: 10;
		max-width: 800px;
		margin: 0 auto;

		overflow: hidden;
		border-bottom: solid black 2px;

		.menu-content {
			box-sizing: border-box;
			max-width: 28rem;
			margin: 0;
			padding: 1rem 2rem;
			display: flex;
			flex-direction: column;

			p {
				margin: 0.5rem 0;
			}

			button {
				padding-top: 1rem;
			}

			.button-set {
				display: flex;
				gap: 1rem;
				padding-top: 1rem;
			}
		}

		.menu-content:last-child {
			align-items: flex-end; // Apply only to the last child
		}
	}

	.menu a {
		display: block;
		color: #fff;
		text-decoration: none;
		margin: 10px 0;
		font-size: 18px;
	}

	.menu a:hover {
		background-color: #555;
	}

	.show-menu.menu {
		top: $top-bar-height; /* Adjust this value to match the height of your top bar */
	}

	// .show-menu.content-container {
	// 	margin-top: $content-offset-lg; /* Adjust this value to match the height of the menu */
	// }

	.rotate-45 {
		transform: rotate(45deg);
	}
	.trans {
		transition: transform 0.2s;
	}
	.size-6 {
		width: 24px;
		height: 24px;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		.top-bar-container {
			position: sticky;
			top: 0;
			z-index: 20;

			.top-bar {
				background-color: var(--color-bg-0);
				position: relative;
				z-index: 50;
				min-height: $top-bar-height;
				height: 100%;
				max-width: 800px;
				margin: 0 auto;
				padding: 0 2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.content-container {
			display: flex;
			transition: margin-top 0.1s;
			margin-top: 2px; /* Adjust this value to match the height of the menu */
			position: relative;
			.content {
				flex-grow: 1;
				position: relative;
			}
			&.no-scroll {
				.content {
					left: 0; //
				}
			}
			&.show-menu {
				margin-top: $content-offset-lg; /* Adjust this value to match the height of the menu */
			}
		}
	}
	.top-form {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		right: -1rem;
	}
	.button-group {
		display: flex;
		align-items: center;
	}
	input {
		// max-width: 210px;
	}

	@media (max-width: 864px) {
		.wrapper {
			.content-container {
				.content {
					left: 0;
				}
			}
		}
		.error {
			justify-content: center;
		}
		.two-col {
			flex-direction: column;
			align-items: center;
			.col {
				.login-form {
					.form-section {
					}
				}
			}
		}
	}

	@media (max-width: 700px) {
		.menu {
			top: $top-menu-offset-sm;
			min-height: $top-menu-height-sm;
			max-height: $top-menu-height-sm;
			flex-direction: column;
			justify-content: flex-start;

			.menu-content:last-child {
				align-items: flex-start; // Apply only to the last child
			}
		}

		.wrapper {
			.content-container {
				&.show-menu {
					margin-top: $content-offset-sm; /* Adjust this value to match the height of the menu */
				}
			}
		}
	}

	@media (max-width: 500px) {
		.two-col {
			.col {
				width: 100%;
				min-width: inherit;
				max-width: inherit;
				.login-form {
					.form-section {
					}
				}
			}
		}
	}

	@media (max-width: 500px) {
		.two-col {
			.col {
				.login-form {
					.form-section {
						flex-direction: column;
						align-items: stretch;
					}
				}
			}
		}
		.menu {
			.menu-content {
				padding: 1rem;
			}
		}

		.wrapper {
			.top-bar-container {
				.top-bar {
					padding: 0 1rem;
				}
			}
		}
	}

	@media (max-width: 400px) {
		.menu {
			top: calc(-1 * (100vh - $top-bar-height - $top-bar-height));
			min-height: calc(100vh - $top-bar-height);
			max-height: calc(100vh - $top-bar-height);
		}
	}

	@media (max-width: 400px) {
		.top-form {
			position: absolute;
			right: 0;
		}
	}
</style>

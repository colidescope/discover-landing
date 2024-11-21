<script lang="ts">
</script>

<div class="wrapper">FOO</div>

<style lang="scss">
	$top-bar-height: 3.5rem;
	$top-bar: $top-bar-height - 2rem;
	$divider-height: 0.125rem;
	$menu-content-gap: 0.5rem;

	$top-menu-height-lg: 15rem;
	$top-menu-height-sm: 30rem;

	$header-height: $top-bar-height + $divider-height;
	$header-height-lg: $header-height + $top-menu-height-lg - $divider-height;
	$header-height-sm: $header-height + $top-menu-height-sm - $divider-height;

	$footer-height-lg: 8rem;
	$footer-height-sm: 12rem;

	.message-box {
		margin: 1rem 0;
		padding: 0 1rem;
		display: flex;
		align-items: flex-start;
		.message {
			flex-grow: 1;
			padding: 0.5rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 1rem;
		}
	}
	.warning {
		background-color: rgba(255, 234, 0, 0.25);
	}
	.error {
		// background-color: #ff440010;
		// background-color: #00ffdd40;
		color: #ff4400;
	}

	em {
		font-size: 0.75rem;
		white-space: nowrap;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		tr {
			td {
				padding: 0.5rem 2rem 0.5rem 0;
				vertical-align: top;
				word-wrap: break-word; /* This breaks words at the edge of the container */
				overflow-wrap: break-word; /* Alternative syntax */

				&.border-top {
					padding-top: 1rem;
				}

				&.message {
					padding-top: 0;
					padding-bottom: 0;
				}

				// &.chatting {
				// 	padding-top: 1.5rem;
				// }

				&.bottom-spacer {
					height: 160px;
				}

				&.new-chat-spacer {
					height: 20px;
				}

				&.less-padding {
					padding-top: 0;
				}
			}
			td:last-child {
				padding-right: 0;
			}

			&.border-top {
				box-shadow:
					inset 0 2px 0 #000000,
					inset 0 0px 0 #000000;
			}
		}
	}
	.user-name {
		white-space: nowrap;
		font-weight: bold;
	}
	.wrapper {
		position: relative;
	}
	.container {
		// background-color: var(--color-bg-0);
		padding: 0 2rem;
		max-width: 800px;
		margin: 0 auto;

		.tabs {
			position: absolute;
			top: -4rem;
			left: 0;
			height: 4rem;
			display: flex;
			width: 100%;

			.tab {
				background-color: rgb(230, 230, 230);
				display: flex;
				flex-grow: 1;
				// width: 50%;
				align-items: center;
				padding: 0 1.5rem;
				border: 1px solid var(--color-bg-0-dark);
				border-bottom: none;
				overflow: hidden;
				position: relative;
				top: 1px;
				z-index: 50;
				cursor: pointer;

				.label {
					font-weight: bold;
					white-space: nowrap;
					overflow: hidden;
				}

				&.hidden {
					z-index: 10;
					background-color: rgb(215, 215, 215);
				}
			}

			.tab.hidden:first-child {
				border-right: none;
			}
			.tab.hidden:last-child {
				border-left: none;
			}
		}

		.messages-wrapper {
			&.border {
				margin-top: 12rem;
				position: relative;
			}

			.links {
				margin-top: 2rem;
				display: flex;
				gap: 2rem;
			}

			.messages {
				// padding-bottom: 2rem;

				&.border {
					// background-color: rgb(230, 230, 230);
					// border: solid 1px var(--color-bg-0-dark);
					// padding: 1.5rem;
					// position: relative;
					// z-index: 25;

					textarea {
						background-color: white;
						height: 52px !important; // match button
						overflow-y: hidden;
					}

					button {
						height: 52px;
						width: 120px;
						max-width: 120px;
					}
				}
			}
		}
	}
	.top-overlay {
		position: sticky;
		top: $header-height;
		left: 0;
		right: 0;

		transition: top 0.1s;

		.leave-link-container {
			max-width: 800px;
			margin: 0 auto;
			display: flex;
			justify-content: flex-end;
			padding: 0 2rem;

			.button-container {
				padding-left: 1rem;
				padding-top: 1rem;
				padding-bottom: 1rem;
				background-color: var(--color-bg-0); /* 50% opacity */
				// backdrop-filter: blur(5px);
			}
		}
		.leave-form-container {
			max-width: 800px;
			margin: 0 auto;

			.backdrop {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				// background-color: rgba(14, 14, 14, 0.5);
				backdrop-filter: blur(5px);
				z-index: 200;
				cursor: pointer;
			}

			.menu-container {
				position: relative;
				z-index: 250;
				background-color: var(--color-bg-0-dark);
				height: 100%;
				margin: 0;
				padding: 2rem;
				// gap: 0.5rem;
				.menu-content {
					display: flex;
					flex-direction: column;
					gap: 2rem;

					.modal-close {
						position: absolute;
						top: 1rem;
						right: 1rem;
						min-width: 0;
						background: none;
						color: white;
						border: none;
						font-size: 1.5rem;
						cursor: pointer;
					}
					.button-group {
						display: flex;
						gap: 1rem;
						button {
							flex: 1;
							text-align: left;
						}
					}
					.menu-body {
						display: flex;
						flex-direction: column;
						gap: 2rem;
						p {
							color: white;
							margin: 0;
						}

						p:first-child {
							padding-right: 3rem;
						}
					}
				}
			}
		}

		&.menu-open {
			top: $header-height-lg;
		}
	}
	form {
		// padding-top: 2rem;
		// width: calc(100% + 1rem);
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding-bottom: 1rem;
		// gap: 1rem;

		position: relative;
		top: 0.125rem;

		&.left {
			left: -1rem;
			width: calc(100% + 1rem);
		}

		&.full {
			left: -1rem;
			width: calc(100vw - 1rem);
		}

		textarea {
			// height: 46px; // match button
			background-color: rgba(255, 255, 255, 0);
			height: 72px; // match button
			box-sizing: border-box;
			flex-grow: 1;
			padding: 1rem;
			border-radius: 0;
			border: 0;
			font-size: 1em;
			// resize: vertical; /* allows resizing only vertically */
			resize: none; /* allows resizing only vertically */
			outline: none; /* removes the default focus outline */
		}

		textarea::placeholder {
			color: #888; /* Set color */
			// font-size: 14px;     /* Set font size */
			// font-style: italic;  /* Set font style */
			// opacity: 1;          /* Adjust opacity if needed */
		}

		.buttonGroup {
			// height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 0.5rem;

			&.float {
				position: absolute;
				right: 0;
				top: -46px;

				button {
					height: 46px;
				}
			}

			button {
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
	}
	.grey {
		color: #777777;
	}

	tr.sticky {
		background-color: var(--color-bg-0);
		// background-color: white;
		// padding-top: 0.5rem;

		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;

		max-width: 800px;
		margin: 0 auto;

		// td {
		// 	padding-bottom: 2rem;
		// }
	}

	@media (max-width: 864px) {
		form {
			// .buttonGroup {
			// 	flex-direction: row;
			// }
		}
		tr.sticky {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	@media (max-width: 700px) {
		.top-overlay {
			&.menu-open {
				top: $header-height-sm;
			}
		}
	}

	@media (max-width: 600px) {
		table {
			tr {
				td:first-child {
					// padding-bottom: 0.5rem;
				}

				td {
					padding-top: 0.25rem;
					padding-bottom: 0.25rem;

					&.bottom-spacer {
						height: 100px;
					}
				}

				&.sticky {
					// padding-top: 1rem;
					// td:last-child {
					// 	padding-top: 0.5rem;
					// 	padding-bottom: 8rem;
					// }
				}

				&.column {
					display: flex;
					flex-direction: column;
				}
			}
		}
		form {
			gap: 0;
			.buttonGroup {
				flex-direction: row;

				button {
					padding-left: 2rem;
					padding-right: 3rem;
				}
			}
		}
	}

	@media (max-width: 500px) {
		.container {
			padding: 0 1rem; //
		}
		tr {
			&.sticky {
				padding-left: 1rem; //
				padding-right: 1rem; //
			}
		}
		.top-overlay {
			.leave-link-container {
				padding: 0 1rem; //
			}
			.leave-form-container {
				.menu-container {
					padding: 2rem 1rem; //

					.menu-content {
						.button-group {
							// flex-direction: column;
						}
					}
				}
			}
		}
		form {
			&.full {
				width: calc(100vw + 0.25rem);
			}
		}
		// table {
		// 	tr {
		// 		td {
		// 			&.message-top {
		// 				padding-top: 0.5rem;
		// 			}
		// 		}
		// 	}
		// }
	}
</style>

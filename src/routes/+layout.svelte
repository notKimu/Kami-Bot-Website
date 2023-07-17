<script lang="ts">
	import "../css/globals.css";
	import "../css/extras.css"
	import kamiPfp from '../assets/img/kamiEars.webp';
</script>

<svelte:head>
	<title>Kami Bot!</title>
</svelte:head>

<header>
	<div class="separator">
		<div class="header-column">
			<div class="header-items">
				<a href="/">
					<img class="profile-pic" src={kamiPfp} alt="Profile pic of the Kami discord bot" />
				</a>

				<a class="popup-parent" href="https://discord.com/api/oauth2/authorize?client_id=1084944569872941247&permissions=8&scope=bot" target="#">
					<xml version="1.0" encoding="utf-8">
						<svg
							class="svg-item"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.554 3.9974L19.2301 8.13188C21.0767 9.76455 22 10.5809 22 11.6325C22 12.6842 21.0767 13.5005 19.2301 15.1332L14.554 19.2677C13.7111 20.0129 13.2897 20.3856 12.9422 20.2303C12.5947 20.0751 12.5947 19.5143 12.5947 18.3925V15.6472C8.35683 15.6472 3.76579 17.6545 2 21C2 10.2943 8.27835 7.61792 12.5947 7.61792V4.87257C12.5947 3.75082 12.5947 3.18995 12.9422 3.03474C13.2897 2.87953 13.7111 3.25215 14.554 3.9974Z"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</xml>

					<div class="popup">Invite me!</div>
				</a>
				<a class="popup-parent" href="/commands">
					<xml version="1.0" encoding="utf-8">
						<svg
							class="svg-item"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
							<path
								d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
							<path
								d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
							<path
								opacity="0.5"
								d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
								stroke-width="1.5"
							/>
						</svg>
					</xml>

					<div class="popup">Commands</div>
				</a>
				<a class="popup-parent" href="https://discord.gg/NfeXrQdXdE" target="#">
					<xml version="1.0" encoding="utf-8">
						<svg
							class="svg-item"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
							<path
								opacity="0.5"
								d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
						</svg>

						<div class="popup">Beta testing</div>
					</xml>
				</a>
			</div>
			<h1 class="version">01</h1>
		</div>
		<div class="line-decorator" />
	</div>
</header>

<slot />

<style>
	header {
		position: fixed;
		height: var(--header-height);
		width: var(--header-width);
		right: 0;
		top: 0;

		background-color: #1c1c1c;
		z-index: 1000;
	}

	.separator {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1rem;
	}

	.header-column {
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		padding: var(--padding-m);
	}

	.header-items {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--padding-s);
	}

	.profile-pic {
		width: 100%;
	}

	.svg-item {
		height: 4rem;
		width: 4rem;
		stroke: azure;
	}

	.svg-item:hover {
		stroke: var(--accent-color);
	}

	.version {
		font-family: var(--font-poster);
		font-size: var(--font-size-xxl);
	}

	.line-decorator {
		position: absolute;
		height: 100%;
		width: 1rem;
		right: 0;
		top: 0;

		background-image: repeating-linear-gradient(
			15deg,
			var(--accent-color),
			var(--accent-color) 1%,
			transparent 1%,
			transparent 2%,
			blue 2%
		);
	}

	/**RESPONSIVE */
	@media screen and (max-width: 875px) {
		header {
			right: unset;
			top: unset;
			bottom: 0;
			left: 0;
		}

		.header-column {
			display: flex;
			flex-direction: row;
		}

		.header-column {
			height: var(--header-height);
			flex-direction: row;
			align-items: center;
		}

		.header-items {
			width: unset;
			flex-direction: row;
		}

		.profile-pic {
			height: 4rem;
			width: 4rem;
		}

		.svg-item {
			height: 2.5rem;
			width: 2.5rem;
			stroke: azure;
		}

		.version {
			font-size: 3rem;
		}

		.line-decorator {
			background-image: repeating-linear-gradient(
				15deg,
				var(--accent-color),
				var(--accent-color) 5%,
				transparent 5%,
				transparent 10%,
				blue 10%
			);
		}
	}
</style>

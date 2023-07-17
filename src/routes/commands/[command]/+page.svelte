<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.category);
</script>

<svelte:head>
	<title>{data.category ?? "Not Found :?"}</title>
</svelte:head>

<article class="width-w-header-f">
	{#if data.commands === null}
		<h1>No commands here!</h1>
	{:else}
		<div class="commands-container">
			{#each data.commands as command}
				<div class={'command command-container ' + data.category}>
					<h1 class="command-name">{command.name}</h1>
					{#if command.options}
						<h2 class="command-options">{command.options}</h2>
					{/if}
					<h3>{command.description}</h3>
				</div>
			{/each}
		</div>
	{/if}
</article>

<style>
	article {
		min-height: 100dvh;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.commands-container {
		width: 85%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: var(--padding-m);

		padding: var(--padding-x);
	}

	.command {
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: var(--padding-s);

		padding: var(--padding-m);
	}

	.command-name::before {
		content: '/';
	}

	.command-name {
        border-bottom: 3px dashed azure;
		padding-bottom: var(--padding-s);
	}

	.command-options {
		background-image: repeating-linear-gradient(
			145deg,
			#00000022,
			#00000022 5%,
			transparent 5%,
			transparent 10%,
			blue 10%
		);
	}

	@media screen and (max-width: 875px) {
        article {
            margin-bottom: var(--header-height);
        }

		.commands-container {
			grid-template-columns: 1fr;
		}
	}
</style>

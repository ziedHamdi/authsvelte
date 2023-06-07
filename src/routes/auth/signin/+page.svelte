<script>
	import { signIn, getSession, csrfToken } from "@auth/sveltekit/client";

	export let data;
</script>

<div>
		{#each data.providers as provider, index(provider.name)}
			<div key={provider.name}>
				<button on:click={() => signIn(provider.id)}>
					Sign in with {provider.name}
				</button>
			</div>
			{/each}
</div>
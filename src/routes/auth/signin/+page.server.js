import Google from "@auth/core/providers/google";

export async function load(event) {
	const providers = [Google]
	return {providers:JSON.parse(JSON.stringify(providers))}
}

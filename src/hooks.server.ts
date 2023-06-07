import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import { env } from '$env/dynamic/private'

export const handle = SvelteKitAuth({
  secret:env.AUTH_SECRET,
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  pages: {
    signIn: '/auth/signin',
  }

})

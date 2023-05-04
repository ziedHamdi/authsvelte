import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import LinkedIn from "@auth/core/providers/linkedin"

import { GITHUB_ID, GITHUB_SECRET, LINKED_IN_CLIENT_ID, LINKED_IN_CLIENT_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
      GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
      LinkedIn({ clientId: LINKED_IN_CLIENT_ID, clientSecret: LINKED_IN_CLIENT_SECRET })
  ],
})

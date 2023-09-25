import { createAuth0 } from '@auth0/auth0-vue'

export const authConfig = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENTID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT
  }
})

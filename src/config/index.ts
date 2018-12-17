import { AppEnv, NodeEnv, appEnv, nodeEnv } from '#GECK/env'
import { FirebaseConfig } from '#GECK/firebase'

export interface GlobalConfig {}

export interface AppEnvConfig {
  origin: string
  gtag?: string
  sentry?: string
  firebase: FirebaseConfig
}

const firebaseStaging: FirebaseConfig = {
  apiKey: 'AIzaSyArPabWWebnLWhEgITZbLjTA6I_BaDmF0E',
  authDomain: 'staging.date-fns.org',
  projectId: 'date-fns-staging'
}

// Derive the config
const configs: {
  [appEnv: string]: AppEnvConfig
} = {
  development: {
    origin: 'http://localhost:4999',
    firebase: firebaseStaging
  },

  production: {
    origin: 'https://date-fns.org',
    gtag: 'UA-71951329-1',
    sentry: 'https://42f85b01618b42f58c0bfbd4fe3b4ae1@sentry.io/1354832',
    firebase: {
      apiKey: 'AIzaSyCs0lJ6e3g_PLiTOT7LteufNS49fazELaA',
      authDomain: 'date-fns.org',
      projectId: 'date-fns'
    }
  },

  staging: {
    origin: 'https://staging.date-fns.org',
    sentry: 'https://42f85b01618b42f58c0bfbd4fe3b4ae1@sentry.io/1354832',
    firebase: firebaseStaging
  }
}
const config = configs[appEnv]

const globalConfig: GlobalConfig = {}

export default config
export { AppEnv, appEnv, NodeEnv, nodeEnv, globalConfig }

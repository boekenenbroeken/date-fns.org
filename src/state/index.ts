import { StateWithFlashes } from '#GECK/flashes'
import { StateWithRoute, RouteLocation } from '#GECK/router'

interface VersionFeatures {
  benchmarks: boolean
  camelCase: boolean
  docs: boolean
  esm: boolean
  fp: boolean
  i18n: boolean
  utc: boolean
}

export interface Version {
  tag: string
  commit: string
  prerelease: boolean
  time: number
  features: VersionFeatures
}

export const db = {
  // TODO
}

export enum RouteName {
  Home = 'home',
  Doc = 'doc'
}

export const routes = [
  { path: '/', name: RouteName.Home },
  { path: '/:tag/docs/:docId', name: RouteName.Doc }
]

interface AppState {
  cookies?: {}

  resolved?: {
    [RouteName.Home]: string[]
  }
}

export type GlobalState = StateWithFlashes & StateWithRoute & AppState

export async function resolveState(
  route: RouteLocation | undefined,
  _target: 'web' | 'server'
) {
  switch (route && route.name) {
    case RouteName.Home:
      return Promise.resolve({ to: 'do' })

    default:
      return Promise.resolve({})
  }
}

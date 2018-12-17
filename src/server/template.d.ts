import { AppEnvConfig } from '#app/config'
import { AppEnv, NodeEnv } from '#GECK/env'
import { GlobalState } from '#app/state'

export type EntryType = 'js' | 'css'

export interface TemplatePayload {
  content: string
  initialState: GlobalState
  config: AppEnvConfig
  appEnv: AppEnv
  nodeEnv: NodeEnv
  entryPath: (entryName: string, entryType: EntryType) => string
}

export default function template(payload: TemplatePayload): string

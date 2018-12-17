import 'source-map-support/register'
import { h } from 'preact'
import { render } from 'preact-render-to-string'
import UI from '#app/UI'
import { onRequest } from '#GECK/firebase/functions'
import template, { EntryType } from './template'
import config from '#app/config'
import { appEnv, nodeEnv, NodeEnv } from '#GECK/env'
import { requestToRouteInput } from '#GECK/router/server'
import { resolveRoute } from '#GECK/router'
import { resolveState } from '#app/state'
import merge from 'lodash/merge'

let assetsMap: { [entryName: string]: { [Key in EntryType]: string } }
if (nodeEnv === NodeEnv.Production) {
  assetsMap = require('./webpack-assets.json')
}

export const renderer = onRequest(async (req, resp) => {
  const route = resolveRoute(requestToRouteInput(req))
  const resolvedState = await resolveState(route, 'server')
  const initialState = merge(
    { route, cookies: JSON.parse(req.cookies.__session || '{}') },
    resolvedState
  )
  const content = render(<UI {...initialState} />)
  const html = template({
    content,
    initialState,
    entryPath,
    config: config,
    appEnv,
    nodeEnv
  })
  resp.send(html)
})

function entryPath(entryName: string, type: EntryType = 'js') {
  return assetsMap ? assetsMap[entryName][type] : `/assets/${entryName}.${type}`
}

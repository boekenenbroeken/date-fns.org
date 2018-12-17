import './initFirebase'
import { renderLoop } from '#GECK/state/loop'
import { initAuth } from '#GECK/firebase/auth'

initAuth()
renderLoop()

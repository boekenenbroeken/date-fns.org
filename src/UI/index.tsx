import './style'
import { h } from 'preact'
import { GlobalState } from '#app/state'
import Flashes from '#GECK/flashes/Component'
import { RouteName } from '#app/state'
import { El } from '#GECK/UI/Spacing'
import { Size } from '#GECK/UI/types'
import { ContentWrapper } from '#GECK/UI/Layout'
import Home from './Home'
import Doc from './Doc'

export default function UI(state: GlobalState) {
  return (
    <div id="ui">
      <El padded size={Size.Large}>
        <ContentWrapper aligned size={Size.Small}>
          <Content {...state} />
        </ContentWrapper>
      </El>
      <Flashes flashes={state.flashes} />
    </div>
  )
}

function Content(state: GlobalState) {
  switch (state.route && state.route.name) {
    case RouteName.Home: {
      return <Home />
    }

    case RouteName.Doc: {
      return <Doc />
    }

    default:
      return <div>404</div>
  }
}

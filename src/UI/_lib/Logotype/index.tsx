import { h } from 'preact'
import { H } from '#GECK/UI/Spacing'
import { Size } from '#GECK/UI/types'
import Logo from '../Logo'
import { Text } from '#GECK/UI/Text'

export default function Logotype() {
  return (
    <H size={Size.Small} aligned>
      <Logo />
      <Text>date-fns</Text>
    </H>
  )
}

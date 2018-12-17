import { h } from 'preact'
import { Size } from '#GECK/UI/types'
import LogoSVG from './logo'
import { Wrapper } from './style'

export default function Logo({ tag, size }: { tag?: string; size?: Size }) {
  return (
    <Wrapper tag={tag} size={size}>
      <LogoSVG />
    </Wrapper>
  )
}

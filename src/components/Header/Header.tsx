import './_Header.scss'
import { Sparkle } from '@phosphor-icons/react'
import { HeaderProps } from './type'

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      {title}
      <Sparkle />
    </div>
  )
}

export default Header

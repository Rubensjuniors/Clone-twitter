import React, { ReactNode } from 'react'
import './Happening.scss'
import { Link } from 'react-router-dom'
interface HappeningProps {
  children: ReactNode
}

const Happening = ({ children }: HappeningProps) => {
  return (
    <div className="happening">
      <h2>What’s happening</h2>

      <div className="happening__tags">{children}</div>

      <Link className="show-more-button" to="/">
        Show More
      </Link>
    </div>
  )
}

export default Happening

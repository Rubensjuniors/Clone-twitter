import { useState } from 'react'
import './Follow.scss'

const Follow = () => {
  const [follow, setFollow] = useState(false)

  return (
    <button onClick={() => setFollow(!follow)} className="follow">
      {follow ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default Follow

import { Link } from 'react-router-dom'
import './_Tweet.scss'
import {
  ChatCircle,
  ArrowsClockwise,
  Heart,
  DotsThreeOutline,
} from '@phosphor-icons/react'
import useConter from '../../Hooks/index'

interface Tweet {
  photo: string
  name: string
  user: string
  time: string | number
  content: string
}

const Tweet = ({ photo, name, user, time, content }: Tweet) => {
  const {
    like,
    retweet,
    handleLike,
    handleRetweet,
    isclickLike,
    isclickRetweet,
  } = useConter()

  return (
    <div className="tweet">
      <Link to="/Profile" className="tweet__photo">
        <img src={photo} alt={name} />
      </Link>

      <div className="tweet__texts">
        <div className="tweet__texts-header">
          <div>
            <Link to="/Profile" className="limit-text-sm">
              <strong>{name}</strong>
              <span>{user}</span>
            </Link>
            <span className="tweet__texts-header-time">{time}</span>
          </div>
          <DotsThreeOutline size={24} weight="fill" />
        </div>

        <Link to="/Status" className="tweet__texts-content">
          <p>{content}</p>
        </Link>

        <div className="tweet__texts-interaction">
          <Link to="/Status" className="tweet__texts-interaction-item">
            <ChatCircle />
            <span>0</span>
          </Link>
          <button
            className={`tweet__texts-interaction-item ${
              isclickRetweet ? 'active-click' : ''
            }`}
            onClick={() => handleRetweet()}
          >
            <ArrowsClockwise />
            <span>{retweet}</span>
          </button>
          <button
            className={`tweet__texts-interaction-item ${
              isclickLike ? 'active-click-like' : ''
            }`}
            onClick={() => handleLike()}
          >
            <Heart />
            <span>{like}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet

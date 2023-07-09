import { DotsThreeOutline } from '@phosphor-icons/react'
import './Profile.scss'
import { Link } from 'react-router-dom'

interface ProfileProps {
  name: string
  user: string
  photo: string
}

const ProfileCard = ({ name, user, photo }: ProfileProps) => {
  return (
    <Link to="/Profile" className="card">
      <div className="card__photo">
        <img src={photo} alt={name} />
      </div>

      <div className="card__names">
        <strong className="card__names-name limit-text-sm">
          <Link to="/Profile">{name}</Link>
        </strong>
        <span className="card__names-user">{user}</span>
      </div>
      <DotsThreeOutline size={24} weight="fill" />
    </Link>
  )
}

export default ProfileCard

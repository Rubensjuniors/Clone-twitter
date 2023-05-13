import { DotsThreeOutline } from "@phosphor-icons/react";
import "./Profile.scss";
import { Link } from "react-router-dom";

interface ProfileProps {
  name: string;
  user: string;
  photo: string;
}

const ProfileCard = ({ name, user, photo }: ProfileProps) => {
  return (
    <Link to="/" className="card">
      <Link to="/" className="card__photo">
        <img src={photo} alt={name} />
      </Link>

      <div className="card__names">
          <strong className="card__names-name"><Link to="/">{name}</Link></strong>
          <span className="card__names-user">{user}</span>
      </div>
        <DotsThreeOutline size={24} weight="fill"/>
    </Link>
  );
};

export default ProfileCard;
import { DotsThreeOutline } from "@phosphor-icons/react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import Follow from "../../FollowButton/Follow";

interface ProfileProps {
  name: string;
  user: string;
  photo: string;
}

const ProfileFollow = ({ name, user, photo }: ProfileProps) => {
  return (
    <div className="cardProfile-Follow">
      <Link to="/Profile" className="cardFollow">
        <div className="card__photo">
          <img src={photo} alt={name} />
        </div>

        <div className="cardFollow__names">
          <strong className="cardFollow__names-name limit-text-sm">
            <Link to="/Profile">{name}</Link>
          </strong>
          <span className="cardFollow__names-user">{`@${user}`}</span>
        </div>
      </Link>
      <Follow/>
    </div>
  );
};

export default ProfileFollow;

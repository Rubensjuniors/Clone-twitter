import { Link } from "react-router-dom";
import "./_Tweet.scss";
import {
  ChatCircle,
  ArrowsClockwise,
  Heart,
  DotsThreeOutline,
} from "@phosphor-icons/react";

interface Tweet {
  photo: string;
  name: string;
  user: string;
  time: string | number;
  content: string;
}

const Tweet = ({ photo, name, user, time, content }: Tweet) => {
  return (
    <div className="tweet">
      <div className="tweet__photo">
        <img src={photo} alt={name} />
      </div>

      <div className="tweet__texts">
        <div className="tweet__texts-header">
          <div>
            <p className="limit-text-sm">
              <strong >{name}</strong>
              <span>{user}</span>
            </p>
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
          <div className="tweet__texts-interaction-item">
            <ArrowsClockwise />
            <span>0</span>
          </div>
          <div className="tweet__texts-interaction-item">
            <Heart />
            <span>0</span>
          </div>
        </div>
      </div>
      <Link to="/Status"></Link>
    </div>
  );
};

export default Tweet;

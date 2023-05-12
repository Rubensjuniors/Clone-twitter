import { Link, NavLink } from "react-router-dom";
import "./_Tweet.scss";
import { ChatCircle, ArrowsClockwise, Heart, Dot } from "@phosphor-icons/react";

interface Tweet {
  name?: string;
  user?: string;
  content: string;
}

const Tweet = ({ name, user, content }: Tweet) => {
  return (
    <>
      <Link to="/Status" className="tweet">
        <img
          className="tweet__profile-img"
          src="https://avatars.githubusercontent.com/u/104171589?v=4"
          alt="Rubensjunio"
        />

        <div className="tweet__content">
          <div className="tweet__content-header">
            <div className="tweet__content-header-names">
              <strong>Rubens Junio</strong>
              <span>@Eorubis</span>
            </div>
            
            <span className="tweet__content-header-hr">1s</span>
          </div>

          <p className="tweet__content-text">{content}</p>
        </div>
      </Link>

      <div className="tweet-interaction">
        <NavLink to="/Status" type="button">
          <ChatCircle />
          20
        </NavLink>
        <button type="button">
          <ArrowsClockwise weight="fill" />
          20
        </button>
        <button type="button">
          <Heart />
          20
        </button>
      </div>
    </>
  );
};

export default Tweet;

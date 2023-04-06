import { Link } from "react-router-dom";
import "./_Tweet.scss";
import { ChatCircle, ArrowsClockwise, Heart } from "@phosphor-icons/react";

interface Tweet{
  content: string

}

const Tweet = (props: Tweet) => {
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
            <strong>Rubens Junio</strong>
            <span>@Eorubis</span>
          </div>

          <p className="tweet__content-text">{props.content}</p>

          <div className="tweet__content-footer">
            <button type="button">
              <ChatCircle />
              20
            </button>
            <button type="button">
              <ArrowsClockwise weight="fill" />
              20
            </button>
            <button type="button">
              <Heart />
              20
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Tweet;

import "./_Sidebar.scss";
import twitterLogo from "../../assets/log-twitter.svg";
import { Link, NavLink } from "react-router-dom";
import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo Twitter" />

      <nav className="main__navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <Link to="/">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link to="/">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link to="/">
          <EnvelopeSimple />
          <span>Messages</span>
        </Link>
        <Link to="/">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </Link>
        <Link to="/">
          <FileText />
          <span>List</span>
        </Link>
        <Link to="/">
          <User />
          <span>Profile</span>
        </Link>
        <Link to="/">
          <DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>

      <button className="new__tweet" type="button">
        <span>Tweet</span>
        <Pencil className="TweetButton-icon" />
      </button>
    </aside>
  );
};

export default Sidebar;

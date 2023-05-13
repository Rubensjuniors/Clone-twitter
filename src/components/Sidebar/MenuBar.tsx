import "./MenuBar.scss";
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
import ProfileCard from "../CardProfile/Profile";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="menuBar__topside">
      <div className="menuBar__topside-logo">
       <img src={twitterLogo} alt="Logo Twitter" />
      </div>

      <nav className="menuBar__topside-navigation">
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

      <button className="menuBar__topside-button-tweet" type="button">
        <span>Tweet</span>
        <Pencil />
      </button>
      </div>

      <div className="menuBar__bottomside">
        <ProfileCard 
        photo="https://avatars.githubusercontent.com/u/104171589?v=4"
        name="Rubens Junio"
        user="@Eorubis"
        />
      </div>
    </div>
  );
};

export default MenuBar;

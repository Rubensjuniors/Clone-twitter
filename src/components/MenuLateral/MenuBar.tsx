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
        <NavLink to="/Explore">
          <Hash />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/Notifications">
          <Bell />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/Messages">
          <EnvelopeSimple />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/Bookmarks">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/List">
          <FileText />
          <span>List</span>
        </NavLink>
        <NavLink to="/Profile">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/More">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
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
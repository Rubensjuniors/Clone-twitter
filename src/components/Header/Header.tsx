import "./_Header.scss";
import { Sparkle } from "@phosphor-icons/react";

interface HeaderProps{
  title: string 
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      {props.title}
      <Sparkle />
    </div>
  );
};

export default Header;

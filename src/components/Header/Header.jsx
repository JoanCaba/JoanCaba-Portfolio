import Navbar from "./Navbar/Navbar"
import './Header.css'
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";
import MEDIA from "../../data/externalMedia";
import SocialButton from "../SocialButton/SocialButton";

const Header = () => {
  return (
    <header>
      <div className="media-buttons">{Object.keys(MEDIA).map((media) => <SocialButton key={media} networkName={media} style='small-size' />)}</div>
      <Navbar></Navbar>
      <LanguageSwitch></LanguageSwitch>
    </header>
  )
};

export default Header
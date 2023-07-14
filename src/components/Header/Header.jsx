import Navbar from "./Navbar/Navbar"
import './Header.css'
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";

const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <LanguageSwitch></LanguageSwitch>
    </header>
  )
};

export default Header
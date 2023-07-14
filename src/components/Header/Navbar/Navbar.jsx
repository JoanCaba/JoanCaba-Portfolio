import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { t } = useTranslation();
  // TODO: move this to a json?
  const links = [
    {
      to: "/",
      name: 'home'
    },
    {
      to: "/about",
      name: 'about'
    }
  ]
  return (
    <nav>
      <ul className='navbar-list'>
        {links.map((link) => <li key={link.to}><NavLink to={link.to}>{t(link.name)}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar
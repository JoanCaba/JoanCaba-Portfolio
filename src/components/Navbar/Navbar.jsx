import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

  // TODO: move this to a json?
  const links = [
    {
      to: "/",
      name: 'Home'
    },
    {
      to: "/about",
      name: 'About'
    }
  ]
  return (
    <nav>
      <ul className='navbar-list'>
        {links.map((link) => <li key={link.to}><NavLink to={link.to}>{link.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar
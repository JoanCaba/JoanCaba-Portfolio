import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useTranslation } from "react-i18next"
import availableRoutes from '../../../data/availableRoutes';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className='navbar-list'>
        {availableRoutes.map((route) => <li key={route.path}><NavLink to={route.path}>{t(route.routeName)}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar
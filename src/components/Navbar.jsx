import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";

const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''

const Navbar = () => {
  const basketCount = useSelector((state) => state.products.basket)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={activeMenuClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={activeMenuClass}>Products</NavLink>
        </li>
        <li>
          <NavLink className={activeMenuClass}>Basket {basketCount}</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
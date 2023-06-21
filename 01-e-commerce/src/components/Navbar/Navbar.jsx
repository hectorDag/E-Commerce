import { useAuthContext } from '@/hooks/useAuth'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const { logout, isAuth } = useAuthContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'
  }

  return (
    <nav className='navbar'>

      <NavLink className='navbar__logo'>Best-Sales</NavLink>

      <div className='navbar__navegation'>

        <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>

        {isAuth
          ? (
            <>
              <NavLink to='/' className='navbar__link' onClick={logout}>Logout</NavLink>
            </>
            )
          : (
            <>
              <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
            </>
            )}

        <div className='navbar__search'>
          <input className='navbar__search-bar' type='text' placeholder='' />
        </div>

      </div>
    </nav>
  )
}
export default Navbar

// <button className='navbar__search-button' />

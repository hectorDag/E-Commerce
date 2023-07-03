import { useAuthContext } from '@/hooks/useAuth'
import { useListaContext } from '../../hooks/useLista'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const { logout, isAuth, isAdmin } = useAuthContext()
  const { valorBusqueda, handleBuscar } = useListaContext()

  const handleChange = (event) => {
    const valor = event.target.value
    handleBuscar(valor.toLowerCase())
  }

  const linkIsActive = (isActive) => {
    return isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'
  }

  return (
    <nav className='navbar'>

      <NavLink className='navbar__logo'>Best-Sales</NavLink>

      <div className='navbar__navegation'>

        {isAuth
          ? (<>{isAdmin ? (<NavLink className='navbar__admin'>Modo Admin: ACTIVADO</NavLink>) : (<></>)}</>)
          : (<></>)}

        <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>

        {isAuth
          ? (
            <>
              <NavLink to='/shopping/cart' className='navbar__link'>Shopping Card</NavLink>
              <NavLink to='/' className='navbar__link' onClick={logout}>Logout</NavLink>
            </>
            )
          : (
            <>
              <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
            </>
            )}

        <div className='navbar__search'>
          <input className='navbar__search-bar' type='text' value={valorBusqueda} onChange={handleChange} placeholder='Buscar' />
        </div>

      </div>
    </nav>
  )
}
export default Navbar

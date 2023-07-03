import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import Home from '../page/Home'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Cart from '../page/ShoppingCart'
import Detail from '../page/Detail/Detail'
import Add from '../page/Add'

const RoutesIndex = () => {
  const { isAuth, isAdmin } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/shopping/cart' element={isAuth
          ? (<><Cart /></>)
          : (<><Navigate to='/login' /></>)}
      />
      <Route path='/detail/:id' element={<Detail />} />
      <Route
        path='/add' element={isAuth
          ? (
            <>{isAdmin
              ? (<><Add /></>)
              : (<><Navigate to='/' /></>)}
            </>)
          : (<><Navigate to='/login' /></>)}
      />

    </Routes>
  )
}
export default RoutesIndex

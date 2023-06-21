import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import Home from '../page/Home'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Card from '../page/ShoppingCard'
import Detail from '../page/Detail/Detail'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/shopping/card' element={isAuth
          ? <Card />
          : <Navigate to='/login' />}
      />
      <Route path='/detail' element={<Detail />} />
    </Routes>
  )
}
export default RoutesIndex

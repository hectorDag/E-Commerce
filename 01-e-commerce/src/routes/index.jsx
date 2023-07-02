import { Routes, Route } from 'react-router-dom'
/* import { useAuthContext } from '@/hooks/useAuth' */
import Home from '../page/Home'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Card from '../page/ShoppingCard'
import Detail from '../page/Detail/Detail'
import Add from '../page/Add'

const RoutesIndex = () => {
  /* const { isAuth } = useAuthContext() */

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/shopping/card' element={<Card />}
      />
      <Route path='/detail/:id' element={<Detail />} />
      <Route
        path='/add' element={<Add />}
      />

    </Routes>
  )
}
export default RoutesIndex

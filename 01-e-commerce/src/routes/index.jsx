import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Card from '../page/ShoppingCard'
import Detail from '../page/Detail/Detail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/shopping/card' element={<Card />} />
      <Route path='/detail' element={<Detail />} />
    </Routes>
  )
}
export default RoutesIndex

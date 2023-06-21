import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import SignUp from '../page/SignUp'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}
export default RoutesIndex

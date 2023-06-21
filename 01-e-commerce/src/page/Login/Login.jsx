import { loginUserService } from '@/services/userService'
import { useAuthContext } from '../../hooks/useAuth'
import { useNavigate, NavLink } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import Logo from '@/assets/Logo.png'
import './Login.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        navigate('/')
        login(response.data.token)
      }
      // console.log('Usuario creado correctamente', response.data)
    } catch (error) {
      console.log('Osurrio un error', error.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })
  return (
    <main className='form-signin w-100 m-auto'>
      <form className='form' onSubmit={handleSubmit}>

        <div className='mb-4'>
          <img src={Logo} alt='' />
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='button'>
          <button className='btn btn-primary w-100' type='submit'>Sign in</button>
        </div>

        <div className='navlink'>
          <NavLink to='/signup' className='link'>Sign Up</NavLink>
        </div>

      </form>
    </main>

  )
}
export default Login

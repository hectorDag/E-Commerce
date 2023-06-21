import { registerUserService } from '@/services/userService'
import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import Logo from '@/assets/Logo.png'
import '@/page/Login/Login.css'

const SignUp = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate('/login')
      }
      // console.log('Usuario creado correctamente', response.data)
    } catch (error) {
      console.log('Osurrio un error', error.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
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
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <div className='button'>
          <button className='btn btn-primary w-100' type='submit'>Sign in</button>
        </div>

      </form>
    </main>
  )
}
export default SignUp

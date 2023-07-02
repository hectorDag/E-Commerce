import { useNavigate } from 'react-router-dom'
import { CreateItem } from '@/services/itemService'
import { useAuthContext } from '@/hooks/useAuth'
import useForm from '@/hooks/useForm'
import Logo from '@/assets/Logo.png'
import '@/page/Login/Login.css'

const Add = () => {
  const navigate = useNavigate()
  const { userToken } = useAuthContext()

  const sendData = async (data) => {
    try {
      const response = await CreateItem(data, userToken)
      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Osurrio un error', error.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
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
            id='product_name'
            name='product_name'
            value={input.product_name}
            onChange={handleInputChange}
          />
          <label htmlFor='product_name'>Product Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            value={input.description}
            onChange={handleInputChange}
          />
          <label htmlFor='description'>Description</label>
        </div>

        <div className='form-floating'>
          <input
            type='number'
            className='form-control'
            id='price'
            name='price'
            value={input.price}
            onChange={handleInputChange}
          />
          <label htmlFor='price'>Price</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='Kids'>Kids</option>
            <option value='Toys'>Toys</option>
            <option value='Computer'>Computers</option>
            <option value='Shoes'>Shoes</option>
            <option value='Tools'>Tools</option>
            <option value='Grocery'>Grocery</option>
            <option value='Health'>Health</option>
            <option value='Automotive'>Automotive</option>
            <option value='Sports'>Sports</option>
            <option value='Jewelery'>Jewelery</option>
            <option value='Outdoors'>Outdoors</option>
            <option value='Movies'>Movies</option>
            <option value='Music'>Music</option>
            <option value='Industrial'>Industrial</option>
            <option value='Baby'>Baby</option>
            <option value='Beauty'>Beauty</option>
            <option value='Games'>Games</option>
            <option value='Garden'>Garden</option>
            <option value='Home'>Home</option>
            <option value='Electronics'>Electronics</option>
            <option value='Books'>Books</option>
          </select>
          <label htmlFor='category'>Category</label>
        </div>

        <div className='form-floating'>
          <input
            type='brand'
            className='form-control'
            id='brand'
            name='brand'
            value={input.brand}
            onChange={handleInputChange}
          />
          <label htmlFor='brand'>Brand</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='sku'
            name='sku'
            value={input.sku}
            onChange={handleInputChange}
          />
          <label htmlFor='sku'>Sku</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='image'
            name='image'
            value={input.image}
            onChange={handleInputChange}
          />
          <label htmlFor='image'>Image</label>
        </div>
        <div className='button'>
          <button className='btn btn-primary w-100' type='submit'>Create Item</button>
        </div>

      </form>
    </main>
  )
}
export default Add

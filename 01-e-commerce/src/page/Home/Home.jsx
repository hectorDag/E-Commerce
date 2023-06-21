import { useEffect, useState } from 'react'
import { getAllItems } from '@/services/itemService'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import ImageComponent from '@/components/Image'
import Foto from '../../assets/Unavailable.png'
import './Home.css'

const Home = () => {
  const [itemsData, setItemsData] = useState(null)
  const { isAuth } = useAuthContext()

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [])

  const Advertencia = () => {
    window.alert('Para agregar el producto debes iniciar sesion')
  }

  const placeholderImage = Foto

  return (
    <div>
      <p className='header'>Products</p>
      <div className='container'>
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <ImageComponent
              className='card-img-top'
              style={{ maxHeight: '200px' }}
              src={product.image}
              alt={product.product_name}
              notFoundSrc={placeholderImage}
            />
            <div className='card-body'>
              <div className='body'>
                <NavLink to='/detail' className='card-title'>
                  <h5>{product.product_name} </h5>
                </NavLink>
                {isAuth
                  ? (
                    <>
                      <NavLink to='/shopping/card' className='plus'>+</NavLink>
                    </>
                    )
                  : (
                    <>
                      <NavLink to='/login' className='plus' onClick={Advertencia}>+</NavLink>
                    </>
                    )}
              </div>
              <p className='price'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home

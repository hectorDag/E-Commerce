import { useEffect, useState } from 'react'
import { getAllItems } from '@/services/itemService'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [itemsData, setItemsData] = useState(null)

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
  return (
    <div>
      <p className='header'>Products</p>
      <div className='container'>
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '200px' }} src={product.image} alt={product.product_name} />
            <div className='card-body'>
              <div className='body'>
                <h5 className='card-title'>{product.product_name}</h5>
                <NavLink to='/shopping/card' className='plus'>+</NavLink>
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

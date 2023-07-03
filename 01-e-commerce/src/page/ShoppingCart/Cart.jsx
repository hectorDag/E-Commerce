import { useCartContext } from '@/hooks/useCart'
import { NavLink } from 'react-router-dom'
import ImageComponent from '@/components/Image'
import Foto from '@/assets/Unavailable.png'
import '../Home/Home.css'

const Cart = () => {
  const { cart } = useCartContext()

  const placeholderImage = Foto

  return (
    <div className='container'>
      {cart.map((product) => (
        <div className='card' style={{ width: '18rem' }} key={product.id}>
          <ImageComponent
            className='card-img-top'
            style={{ maxHeight: '200px', minHeight: '200px' }}
            src={product.image}
            alt={product.product_name}
            notFoundSrc={placeholderImage}
          />
          <div className='card-body'>
            <div className='body'>
              <NavLink to={`/detail/:${product.id}`} className='card-title'>
                <h5>{product.product_name} </h5>
              </NavLink>
            </div>
            <div className='body'>
              <p className='price'>${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Cart

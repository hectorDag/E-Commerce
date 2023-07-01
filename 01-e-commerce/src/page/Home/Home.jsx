import { useListaContext } from '@/hooks/useLista'
import { useAuthContext } from '@/hooks/useAuth'
import { getAllItems } from '@/services/itemService'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '@/components/Image'
import Foto from '@/assets/Unavailable.png'
import './Home.css'

const Home = () => {
  const { setListaOriginal, listaFiltrada } = useListaContext()
  const { isAuth, isAdmin } = useAuthContext()

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setListaOriginal(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [setListaOriginal])

  const Advertencia = () => {
    window.alert('Para agregar el producto debes iniciar sesion')
  }

  const placeholderImage = Foto

  return (
    <div>
      <p className='header'>Products</p>
      <div className='container'>
        {listaFiltrada && listaFiltrada.map((product) => (
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
                <NavLink to={`/detail/:${product.id}`} className='card-title'>
                  <h5>{product.product_name} </h5>
                </NavLink>
                {isAuth
                  ? (<><NavLink to='/shopping/card' className='plus'>+</NavLink></>)
                  : (<><NavLink to='/login' className='plus' onClick={Advertencia}>+</NavLink></>)}
              </div>
              <div className='body'>
                <p className='price'>${product.price}</p>
                <section className='caontainer-admin'>
                  {isAuth
                    ? (
                      <>{isAdmin
                        ? (
                          <>
                            <NavLink className='admin-buttom'>add</NavLink>
                            <NavLink className='admin-buttom'>delete</NavLink>
                          </>
                          )
                        : (<></>)}
                      </>)
                    : (<></>)}
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home

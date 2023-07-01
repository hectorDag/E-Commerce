import { useState, useEffect } from 'react'
import { getSingleItem } from '@/services/itemService'
import { useParams } from 'react-router-dom'
import ImageComponent from '@/components/Image'
import Foto from '@/assets/Unavailable.png'
import './Detail.css'

const Detail = () => {
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [itemImage, setItemImage] = useState()
  const [itemDescription, setItemDescription] = useState()
  const placeholderImage = Foto
  const { id } = useParams()

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getSingleItem(id.substring(1))
        if (response.status === 200) {
          setItemImage(response.data.image)
          setItemName(response.data.product_name)
          setItemPrice(response.data.price)
          setItemDescription(response.data.description)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [id])

  return (
    <div className='container'>

      <section className='img-description'>
        <ImageComponent className='img' src={itemImage} alt={itemImage} notFoundSrc={placeholderImage} />
        <div className='description'>

          <h3>{itemName}</h3>
          <p>{itemDescription}</p>

          <section className='button-price'>
            <p>${itemPrice}</p>
            <button className='btn btn-primary'>Buy</button>
          </section>

        </div>
      </section>

    </div>
  )
}
export default Detail

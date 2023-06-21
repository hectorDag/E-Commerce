import { useEffect, useState } from 'react'
import { getSingleItem } from '@/services/itemService'
import { useIdContext } from '@/hooks/useIdContext'
import './Detail.css'

const Detail = () => {
  const { selectedProduct } = useIdContext()
  const [productData, setProductData] = useState()

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getSingleItem(selectedProduct)
        if (response.status === 200) {
          setProductData(response.data)
          console.log(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error:', error.message)
      }
    }
    fetchItemData()
  }, [selectedProduct, setProductData])
  return (
    <div className='container'>
      <h1>{productData.price}</h1>
    </div>
  )
}
export default Detail

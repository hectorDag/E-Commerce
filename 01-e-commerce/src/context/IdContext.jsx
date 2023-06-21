import { createContext, useState } from 'react'

const IdContext = createContext()

function IdProvider ({ children }) {
  const [selectedProduct, setSelectedProduct] = useState('')

  const data = {
    selectedProduct,
    setSelectedProduct
  }

  return (
    <IdContext.Provider value={data}>
      {children}
    </IdContext.Provider>
  )
}

export { IdProvider, IdContext }

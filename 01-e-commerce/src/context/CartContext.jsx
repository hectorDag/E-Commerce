import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([])

  const handleClick = (product) => {
    cart.push(product)
    console.log(cart)
  }
  return (
    <CartContext.Provider value={{ handleClick }}>
      {children}
    </CartContext.Provider>
  )
}

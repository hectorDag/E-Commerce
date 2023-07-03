import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const handleClick = (product) => {
    setCart([...cart, product])
  }
  return (
    <CartContext.Provider value={{ handleClick, cart }}>
      {children}
    </CartContext.Provider>
  )
}

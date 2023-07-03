import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useListaContext debe ser usado dentro de ListaProvider')
  }

  return context
}

import { useContext } from 'react'
import { ListaContext } from '../context/ListaContext'

export const useListaContext = () => {
  const context = useContext(ListaContext)

  if (context === undefined) {
    throw new Error('useListaContext debe ser usado dentro de ListaProvider')
  }

  return context
}

import { useContext } from 'react'
import { IdContext } from '@/context/IdContext'

export const useIdContext = () => {
  const context = useContext(IdContext)

  if (context === undefined) {
    throw new Error('useId context debe ser usado dentro IdProvider')
  }

  return context
}

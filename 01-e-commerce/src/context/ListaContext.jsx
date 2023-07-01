import { createContext, useState } from 'react'

export const ListaContext = createContext()

export const ListaProvider = ({ children }) => {
  const [listaOriginal, setListaOriginal] = useState([])
  const [valorBusqueda, setValorBusqueda] = useState('')

  const handleBuscar = (valor) => {
    setValorBusqueda(valor)
  }

  const listaFiltrada = listaOriginal.filter((objeto) => objeto.product_name.toLocaleLowerCase().includes(valorBusqueda))

  return (
    <ListaContext.Provider value={{ setListaOriginal, valorBusqueda, handleBuscar, listaFiltrada }}>
      {children}
    </ListaContext.Provider>
  )
}

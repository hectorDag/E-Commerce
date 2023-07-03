import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ListaProvider } from './context/ListaContext'
import RoutesIndex from './routes'
import Navbar from './components/Navbar'
import './App.css'
import { CartProvider } from './context/CartContext'

function App () {
  return (
    <>
      <CartProvider>
        <ListaProvider>
          <AuthProvider>
            <BrowserRouter>
              <Navbar />
              <RoutesIndex />
            </BrowserRouter>
          </AuthProvider>
        </ListaProvider>
      </CartProvider>
    </>

  )
}

export default App

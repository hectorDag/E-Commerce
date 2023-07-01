import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ListaProvider } from './context/ListaContext'
import RoutesIndex from './routes'
import Navbar from './components/Navbar'
import './App.css'

function App () {
  return (
    <>
      <ListaProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <RoutesIndex />
          </BrowserRouter>
        </AuthProvider>
      </ListaProvider>
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { IdProvider } from './context/IdContext'
import RoutesIndex from './routes'
import Navbar from './components/Navbar'
import './App.css'

function App () {
  return (
    <>
      <IdProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <RoutesIndex />
          </BrowserRouter>
        </AuthProvider>
      </IdProvider>
    </>
  )
}

export default App

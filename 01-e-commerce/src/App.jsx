import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RoutesIndex from './routes'
import Navbar from './components/Navbar'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

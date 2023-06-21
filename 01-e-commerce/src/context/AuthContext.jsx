import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  const login = (token) => {
    localStorage.setItem('token', token)
    const decoded = jwtDecode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

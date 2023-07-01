import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  /* function AuthRole (token) {
    if (token.role === 'ADMIN') {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  } */

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
      if (decoded.role === 'ADMIN') {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, userPayload, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}

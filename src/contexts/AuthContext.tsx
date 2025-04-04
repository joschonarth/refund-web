import { createContext, ReactNode } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ name: 'João' }}>
      {children}
    </AuthContext.Provider>
  )
}

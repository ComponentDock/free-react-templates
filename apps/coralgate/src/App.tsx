import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Coralgate — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 transition-colors dark:bg-gray-950">
      <LoginForm />
      <Footer />
    </div>
  )
}

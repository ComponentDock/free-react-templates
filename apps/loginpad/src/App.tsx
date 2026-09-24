import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loginpad — Account Login Form'
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-page)] p-4 font-sans">
      <div className="w-full max-w-[560px] rounded-[10px] bg-[var(--color-card)] p-[55px_85px] max-sm:p-[55px_25px]">
        <LoginForm />
        <Footer />
      </div>
    </div>
  )
}

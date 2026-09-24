import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'LoginNova — Account Login'
  }, [])

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 font-sans"
      style={{
        background:
          'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
      }}
    >
      <div className="w-full max-w-[560px]">
        <LoginForm />
        <Footer />
      </div>
    </div>
  )
}

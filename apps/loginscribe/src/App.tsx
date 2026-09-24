import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loginscribe — Welcome Login'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page)] font-sans">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="flex w-full max-w-[420px] flex-col rounded-2xl bg-[var(--color-card)] px-10 py-12 shadow-[0_8px_30px_var(--color-shadow)]">
          <LoginForm />
          <Footer />
        </div>
      </div>
    </div>
  )
}

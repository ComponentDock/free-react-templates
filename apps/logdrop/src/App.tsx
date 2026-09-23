import { useEffect } from 'react'
import { UserIcon } from './components/UserIcon'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'LogDrop — Login Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-page)] px-4 py-12 font-sans">
      {/* Page title */}
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-ink)]">LogDrop</h1>

      {/* Login card */}
      <div className="w-full max-w-sm rounded-lg bg-[var(--color-card)] p-8 shadow-md">
        <UserIcon />
        <LoginForm />
      </div>

      <Footer />
    </div>
  )
}

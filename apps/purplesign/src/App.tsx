import { useEffect } from 'react'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'PurpleSign — Login Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-brand-purple)] px-4 py-12 font-sans">
      {/* Page heading */}
      <h1 className="mb-8 text-2xl font-bold text-white">Login #02</h1>

      {/* Login card */}
      <LoginCard />

      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { RegistrationCard } from './components/RegistrationCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regwave — Membership Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-brand-bg)]">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <RegistrationCard />
      </main>
      <Footer />
    </div>
  )
}

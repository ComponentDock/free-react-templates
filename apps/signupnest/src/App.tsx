import { useEffect } from 'react'
import { RegistrationCard } from './components/RegistrationCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SignupNest — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[var(--color-brand-bg-start)] to-[var(--color-brand-bg-end)]">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <RegistrationCard />
      </main>
      <Footer />
    </div>
  )
}

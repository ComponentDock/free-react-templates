import { useEffect } from 'react'
import { HeroImage } from './components/HeroImage'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Portalink — Centered Card Login Form'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page)] font-sans">
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-[400px] overflow-hidden rounded-[5px] shadow-[0px_0px_45px_var(--color-shadow)]">
          {/* Hero image */}
          <HeroImage />

          {/* Form area */}
          <div className="flex flex-col bg-[var(--color-card)]">
            <LoginForm />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

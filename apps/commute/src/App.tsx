import { useEffect } from 'react'
import { HeroImage } from './components/HeroImage'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Commute — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-card)] font-sans">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left half — form area */}
        <div className="flex min-h-screen w-full flex-col lg:w-1/2">
          {/* Hero image for mobile */}
          <div
            className="h-[220px] w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/commute-city/1200/900")',
            }}
            role="img"
            aria-label="Decorative city street image"
          />

          <LoginForm />
          <Footer />
        </div>

        {/* Right half — hero image (hidden on mobile) */}
        <HeroImage />
      </div>
    </div>
  )
}

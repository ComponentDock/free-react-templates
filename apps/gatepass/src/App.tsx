import { useEffect } from 'react'
import { HeroBackground } from './components/HeroBackground'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gatepass — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg-start)] to-[var(--color-bg-end)] font-sans">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left half — hero image (hidden on mobile) */}
        <HeroBackground />

        {/* Right half — form area */}
        <div className="flex min-h-screen w-full flex-col lg:w-1/2">
          {/* Hero image for mobile */}
          <div
            className="h-[220px] w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/gatepass-city/1200/900")',
            }}
            role="img"
            aria-label="Decorative hero image"
          />

          <LoginCard />
          <Footer />
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { HeroSection } from './components/HeroSection'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Passgate — Login Form Template'
  }, [])

  return (
    <div className="h-screen min-h-[700px] font-sans">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left — hero image (25% width, hidden on mobile) */}
        <HeroSection />

        {/* Right — form area (75% width) */}
        <div className="flex h-full w-full flex-col bg-[var(--color-body)] lg:w-3/4">
          {/* Hero image for mobile */}
          <div
            className="h-[200px] w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/passgate-entrance/1200/900")',
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

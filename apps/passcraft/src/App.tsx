import { useEffect } from 'react'
import { HeroSection } from './components/HeroSection'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'PassCraft — Login Form Template'
  }, [])

  return (
    <div className="h-screen min-h-[700px] font-sans">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left half — hero image (hidden on mobile) */}
        <HeroSection />

        {/* Right half — form area */}
        <div className="flex h-full w-full flex-col bg-[var(--color-body)] lg:w-1/2">
          {/* Hero image for mobile */}
          <div
            className="h-[200px] w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/passcraft-kitchen/1200/900")',
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

import { useEffect } from 'react'
import { Illustration } from './components/Illustration'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Passpoint — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page)] font-sans">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left half — form area */}
        <div className="flex min-h-screen w-full flex-col lg:w-1/2">
          {/* Mobile illustration */}
          <div
            className="h-[220px] w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/passpoint-mobile/1200/900")',
            }}
            role="img"
            aria-label="Decorative illustration"
          />

          <LoginForm />
          <Footer />
        </div>

        {/* Right half — illustration (hidden on mobile) */}
        <Illustration />
      </div>
    </div>
  )
}

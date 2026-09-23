import { useEffect } from 'react'
import { Illustration } from './components/Illustration'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Logincove — Split-Screen Login Form'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-page)] font-sans">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <div className="flex w-full max-w-[900px] overflow-hidden rounded-[5px] shadow-[0px_10px_34px_-15px_var(--color-shadow)]">
          {/* Left half — illustration (hidden on mobile) */}
          <Illustration />

          {/* Right half — form area */}
          <div className="flex w-full flex-col bg-[var(--color-card)] p-8 md:w-1/2 md:p-12">
            {/* Mobile illustration */}
            <div
              className="mb-6 h-[250px] w-full rounded-[5px] bg-cover bg-center md:hidden"
              style={{
                backgroundImage: 'url("https://picsum.photos/seed/logincove-mobile/1200/800")',
              }}
              role="img"
              aria-label="Decorative illustration"
            />

            <LoginForm />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

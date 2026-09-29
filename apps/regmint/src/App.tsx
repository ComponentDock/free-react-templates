import { useEffect } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RegMint — Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Split layout — form on left (80%), image on right (20%) */}
      <div className="flex min-h-[90vh] flex-col md:flex-row">
        {/* Background image panel — right side on desktop, top on mobile */}
        <div
          className="order-1 h-[200px] w-full bg-cover bg-center md:order-2 md:h-auto md:w-1/5"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/regmint-hero/400/1200')",
          }}
        />

        {/* Form panel — left side on desktop, bottom on mobile */}
        <div className="order-2 flex w-full items-center justify-center bg-[var(--color-area)] px-4 py-12 md:order-1 md:h-auto md:w-4/5 md:py-0">
          <div className="w-full max-w-[600px] py-10">
            <RegistrationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

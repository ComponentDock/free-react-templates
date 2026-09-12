import { useEffect } from 'react'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tangerine — Sign Up Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-light text-gray-900">
      <main className="flex-1">
        <div className="flex min-h-[calc(100vh-56px)] flex-col md:flex-row">
          {/* Left photo panel — 25% on desktop, top banner on mobile */}
          <div
            className="h-[200px] w-full bg-cover bg-center md:h-auto md:w-1/4"
            style={{
              backgroundImage: "url('https://picsum.photos/seed/tangerine-kitchen/800/1200')",
            }}
            aria-hidden="true"
          />

          {/* Right form panel — 75% on desktop, full width on mobile */}
          <div className="flex flex-1 items-center justify-center bg-panel p-6 md:p-10">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

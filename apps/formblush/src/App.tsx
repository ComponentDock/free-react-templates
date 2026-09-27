import { useEffect } from 'react'
import { SignUpForm } from './components/SignUpForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FormBlush — Sign Up Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col md:flex-row">
        {/* Photo panel — left side on desktop, top on mobile */}
        <div
          className="hidden w-1/2 bg-cover bg-center md:block"
          style={{ backgroundImage: "url('https://picsum.photos/seed/formblush-photo/960/1080')" }}
        >
          <img
            src="https://picsum.photos/seed/formblush-photo/960/1080"
            alt="Decorative photo"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Mobile photo */}
        <div
          className="block h-64 w-full bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('https://picsum.photos/seed/formblush-photo/640/400')" }}
        >
          <img
            src="https://picsum.photos/seed/formblush-photo/640/400"
            alt="Decorative photo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form panel — right side on desktop, bottom on mobile */}
        <div className="flex w-full flex-col bg-[var(--color-brand)] md:w-1/2">
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ReachForm — Contact Form Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center font-sans">
      {/* Mountain background with pink-coral gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/reachform-mountain/1920/1080"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #e84393 0%, #fd7e14 100%)',
            opacity: 0.85,
          }}
        />
      </div>

      {/* Contact form card */}
      <main className="relative z-10 w-full max-w-[520px] px-4 py-12">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

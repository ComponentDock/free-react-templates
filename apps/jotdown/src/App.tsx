import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JotDown — Contact Form Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center font-sans">
      {/* Map background with muted blue-gray tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/jotdown-map/1920/1080"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e8edf5]/70 mix-blend-multiply" />
      </div>

      {/* Contact form card */}
      <main className="relative z-10 w-full max-w-[520px] px-4 py-12">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

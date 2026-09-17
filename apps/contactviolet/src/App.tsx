import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ContactViolet — Contact Form Template'
  }, [])

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-10"
      style={{
        backgroundImage: 'url("https://picsum.photos/seed/mapbackground2/1920/940")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Purple gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(156,39,176,0.0) 0%, rgba(156,39,176,0.7) 50%, rgba(156,39,176,0.9) 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

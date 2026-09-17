import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DropForm — Contact Form Template'
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[--color-bg] px-4 py-10"
      style={{
        backgroundImage: 'url("https://picsum.photos/seed/mapbackground/1920/940")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ContactForm />
      <Footer />
    </div>
  )
}

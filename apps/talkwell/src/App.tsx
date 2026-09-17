import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Talkwell — Contact Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <ContactForm />
      <Footer />
    </div>
  )
}

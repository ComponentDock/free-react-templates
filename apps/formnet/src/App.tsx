import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Formnet — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[--color-bg] px-4 py-10">
      <div className="w-full max-w-[550px] pb-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

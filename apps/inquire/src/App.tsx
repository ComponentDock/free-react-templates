import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Inquire — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-green-500 transition-colors dark:bg-green-800">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

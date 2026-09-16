import { useState, type FormEvent } from 'react'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'
import { Footer } from './components/Footer'

export function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-page-bg font-poppins">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-semibold text-gray-800">Contact Form</h1>
        <div className="flex flex-col gap-0 md:flex-row">
          <ContactForm onSubmit={handleSubmit} submitted={submitted} />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}

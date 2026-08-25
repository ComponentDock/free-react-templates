import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setPhone('')
    setService('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h3 className="mb-8 text-3xl font-bold text-charcoal">Write to us</h3>

        {submitted && (
          <div role="alert" className="mb-6 rounded-md bg-green-50 p-4 text-sm text-green-700">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <input
            type="text"
            placeholder="Choose a Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <textarea
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="resize-none rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

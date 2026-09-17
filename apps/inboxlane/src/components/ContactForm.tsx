import { useState } from 'react'

interface ContactFormProps {
  onSubmit?: (data: FormData) => void
}

export interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email'
    if (!message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    onSubmit?.({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      message: message.trim(),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12" role="status">
        <p className="text-brand text-lg font-medium">Thank you! Your message has been sent.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <h2 className="text-2xl font-medium text-text-heading mb-8">Send us a message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="name" className="block text-sm text-text-label mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            className="w-full border-b border-input-border bg-transparent py-2 text-text-body placeholder:text-text-label focus:outline-none focus:border-brand"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-text-label mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            className="w-full border-b border-input-border bg-transparent py-2 text-text-body placeholder:text-text-label focus:outline-none focus:border-brand"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-text-label mb-1">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone #"
            className="w-full border-b border-input-border bg-transparent py-2 text-text-body placeholder:text-text-label focus:outline-none focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm text-text-label mb-1">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className="w-full border-b border-input-border bg-transparent py-2 text-text-body placeholder:text-text-label focus:outline-none focus:border-brand"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm text-text-label mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            rows={4}
            className="w-full border-b border-input-border bg-transparent py-2 text-text-body placeholder:text-text-label focus:outline-none focus:border-brand resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 bg-brand hover:bg-brand-dark text-white font-medium uppercase tracking-widest text-sm px-8 py-3 transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </form>
  )
}

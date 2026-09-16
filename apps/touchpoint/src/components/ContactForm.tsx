import { useState, type FormEvent } from 'react'

interface ContactFormProps {
  onSubmit: (e: FormEvent) => void
  submitted: boolean
}

export function ContactForm({ onSubmit, submitted }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!subject.trim()) newErrors.subject = 'Subject is required'
    if (!message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onSubmit(e)
    }
  }

  if (submitted) {
    return (
      <div className="flex-1 bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Thank you!</h2>
        <p className="text-gray-600">Your message has been sent successfully.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
      className="flex-1 bg-white p-8"
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Get in touch</h2>

      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
            className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-blue focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-blue focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Subject"
          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-blue focus:outline-none"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mb-6">
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Message"
          rows={6}
          className="w-full resize-none border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-blue focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded bg-brand-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  )
}

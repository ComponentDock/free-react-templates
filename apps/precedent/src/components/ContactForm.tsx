import { useState } from 'react'
import { Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialData: FormData = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (data: FormData): Partial<Record<keyof FormData, string>> => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!data.name.trim()) e.name = 'Name is required'
    if (!data.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email'
    if (!data.subject.trim()) e.subject = 'Subject is required'
    if (!data.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(form)
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    setErrors({})
    setSubmitted(true)
    setForm(initialData)
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="contact-heading"
          className="font-heading mb-12 text-center text-3xl font-bold text-[#1a1a2e]"
        >
          Free Consultation
        </h2>

        {submitted && (
          <div
            role="alert"
            className="mb-6 rounded border border-green-200 bg-green-50 p-4 text-center text-sm text-green-700"
          >
            Thank you! Your consultation request has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2" noValidate>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#1a1a2e]">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={`w-full rounded border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#c5a55a]/50 ${
                errors.name ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1a1a2e]">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={`w-full rounded border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#c5a55a]/50 ${
                errors.email ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-[#1a1a2e]">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => update('subject', e.target.value)}
              className={`w-full rounded border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#c5a55a]/50 ${
                errors.subject ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="Legal consultation"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#1a1a2e]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              className={`w-full resize-none rounded border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#c5a55a]/50 ${
                errors.message ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="Describe your legal matter..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-[#c5a55a] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8963e]"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

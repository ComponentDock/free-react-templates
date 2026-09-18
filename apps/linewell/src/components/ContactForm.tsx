import { useState } from 'react'
import { Send } from 'lucide-react'

export interface ContactFormProps {
  className?: string
}

interface FormData {
  fullName: string
  email: string
  phone: string
  message: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-text-heading">Thank You!</h3>
        <p className="text-sm text-text-body">Your message has been sent.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className ?? ''}`}>
      <div>
        <label
          htmlFor="fullName"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Join Doe"
          className="w-full border-0 border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-body focus:border-brand-green focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full border-0 border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-body focus:border-brand-green focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full border-0 border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-body focus:border-brand-green focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your Comments..."
          className="w-full resize-none border-0 border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-body focus:border-brand-green focus:outline-none"
        />
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-brand-green px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-hover"
        >
          Submit <Send size={14} />
        </button>
      </div>
    </form>
  )
}

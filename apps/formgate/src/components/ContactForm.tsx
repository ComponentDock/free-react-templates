import { useState } from 'react'

interface FormData {
  name: string
  email: string
  budget: string
  message: string
}

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="mx-auto max-w-[700px] rounded-lg border border-input-border bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-text-primary">Get Started</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium text-text-secondary">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-input placeholder-text-secondary/60 outline-none focus:border-brand-coral"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-text-secondary">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-input placeholder-text-secondary/60 outline-none focus:border-brand-coral"
            />
          </div>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1 block text-xs font-medium text-text-secondary">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-input outline-none focus:border-brand-coral"
          >
            <option value="">Choose...</option>
            <option value="low">Low ($0–$500)</option>
            <option value="medium">Medium ($500–$2000)</option>
            <option value="high">High ($2000+)</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-medium text-text-secondary">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows={4}
            className="w-full resize-none border-b border-input-border bg-transparent py-2 text-sm text-text-input placeholder-text-secondary/60 outline-none focus:border-brand-coral"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-brand-coral px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-coral-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

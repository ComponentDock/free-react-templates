import { useState, type FormEvent, type ChangeEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <h2 className="mb-8 text-[20px] font-bold text-brand">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-6">
          <div className="flex-1">
            <label htmlFor="name" className="mb-2 block text-sm text-text-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-text-primary focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="mb-2 block text-sm text-text-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-text-primary focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <label htmlFor="phone" className="mb-2 block text-sm text-text-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone #"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-text-primary focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="company" className="mb-2 block text-sm text-text-label">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-text-primary focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-text-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-y border-b border-input-border bg-transparent py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-text-primary focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="rounded-none bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

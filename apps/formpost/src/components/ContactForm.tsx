import { useState, type FormEvent, type ChangeEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-6 text-center font-['Playfair_Display',serif] text-2xl font-bold text-text-primary">
        Get in touch with us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border border-input-border bg-card-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border border-input-border bg-card-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded border border-input-border bg-card-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded border border-input-border bg-card-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <button
          type="submit"
          className="w-full rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-bg-page transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-bg-page"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

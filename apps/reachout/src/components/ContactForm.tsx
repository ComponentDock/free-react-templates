import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="mx-4 my-8 rounded bg-white p-8 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] md:mx-8 md:my-12 md:p-10 lg:mx-12 lg:my-16">
      <h3 className="mb-8 text-center text-xs font-normal uppercase tracking-widest text-section-heading">
        Send us a message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-14 w-full rounded border border-input-border bg-white px-3 text-sm text-text-primary outline-none focus:border-text-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-14 w-full rounded border border-input-border bg-white px-3 text-sm text-text-primary outline-none focus:border-text-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-text-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            className="w-full resize-y rounded border border-input-border bg-white px-3 py-2 text-sm text-text-primary outline-none focus:border-text-primary"
          />
        </div>
        <button
          type="submit"
          className="h-14 w-full rounded bg-brand py-2 px-4 text-sm font-medium text-white shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] transition-colors hover:bg-brand-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-4">
      <div>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full rounded-lg border border-input-border bg-white px-4 py-3 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full rounded-lg border border-input-border bg-white px-4 py-3 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full rounded-lg border border-input-border bg-white px-4 py-3 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full resize-none rounded-lg border border-input-border bg-white px-4 py-3 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-dark"
      >
        Send Message
      </button>
    </form>
  )
}

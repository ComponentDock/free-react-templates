import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium uppercase text-text-muted"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-muted outline-none focus:border-input-focus"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium uppercase text-text-muted"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-muted outline-none focus:border-input-focus"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-1 block text-xs font-medium uppercase text-text-muted"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-muted outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-medium uppercase text-text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className="w-full resize-y border-b border-input-border bg-transparent py-2 text-sm text-text-heading placeholder-text-muted outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-[5px] bg-brand-teal px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

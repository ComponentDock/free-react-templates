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
    <div className="flex-1">
      <h3 className="mb-6 font-['Playfair_Display',serif] text-xl font-bold text-text-on-dark">
        Write us
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-on-dark placeholder-text-secondary outline-none focus:border-brand-orange"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-on-dark placeholder-text-secondary outline-none focus:border-brand-orange"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border-b border-input-border bg-transparent py-2 text-sm text-text-on-dark placeholder-text-secondary outline-none focus:border-brand-orange"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full resize-y border-b border-input-border bg-transparent py-2 text-sm text-text-on-dark placeholder-text-secondary outline-none focus:border-brand-orange"
        />
        <button
          type="submit"
          className="rounded-[3px] bg-brand-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-orange-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

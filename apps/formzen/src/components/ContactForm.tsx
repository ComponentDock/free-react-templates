import { useState } from 'react'
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="mb-6 text-center text-lg font-bold uppercase tracking-widest text-text-heading">
        Send Us a Message
      </h2>
      <div className="relative">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-placeholder" />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded-lg border border-input-border bg-white py-3 pl-10 pr-4 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-placeholder" />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full rounded-lg border border-input-border bg-white py-3 pl-10 pr-4 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div className="relative">
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-placeholder" />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full rounded-lg border border-input-border bg-white py-3 pl-10 pr-4 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div className="relative">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-text-placeholder" />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full resize-none rounded-lg border border-input-border bg-white py-3 pl-10 pr-4 text-sm text-text-primary shadow-sm placeholder-text-placeholder focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-dark"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </div>
    </form>
  )
}

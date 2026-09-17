import { User, Mail, MessageSquare, Send } from 'lucide-react'
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center" aria-label="Contact form">
      <h2 className="mb-11 text-center text-[24px] font-extrabold leading-tight text-text-dark">
        Get in touch
      </h2>

      <div className="w-full">
        <div className="relative mb-5">
          <User
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="h-[50px] w-full rounded-[25px] bg-bg-input pl-10 pr-4 font-semibold text-text-muted placeholder:text-text-placeholder focus:outline-none"
          />
        </div>

        <div className="relative mb-5">
          <Mail
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="h-[50px] w-full rounded-[25px] bg-bg-input pl-10 pr-4 font-semibold text-text-muted placeholder:text-text-placeholder focus:outline-none"
          />
        </div>

        <div className="relative mb-5">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="h-[50px] w-full rounded-[25px] bg-bg-input pl-10 pr-4 font-semibold text-text-muted placeholder:text-text-placeholder focus:outline-none"
          />
        </div>

        <div className="relative mb-5">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="min-h-[150px] w-full resize-none rounded-[25px] bg-bg-input py-3 pl-10 pr-4 font-semibold text-text-muted placeholder:text-text-placeholder focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex min-w-[193px] items-center justify-center gap-2 rounded-[25px] bg-brand-green px-6 py-2.5 font-bold text-white transition-all hover:bg-brand-green-hover [&>svg]:transition-transform [&>svg]:hover:translate-x-2"
      >
        Send Email
        <Send size={16} />
      </button>
    </form>
  )
}

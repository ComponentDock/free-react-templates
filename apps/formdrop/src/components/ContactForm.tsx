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
    <>
      <h2 className="mb-6 font-['Playfair_Display',serif] text-2xl font-bold text-white">
        Send us a message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/70"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-white placeholder-white/50 outline-none focus:border-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/70"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-white placeholder-white/50 outline-none focus:border-white"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/70"
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
            className="w-full border-b border-input-border bg-transparent py-2 text-sm text-white placeholder-white/50 outline-none focus:border-white"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="w-full resize-none border-b border-input-border bg-transparent py-2 text-sm text-white placeholder-white/50 outline-none focus:border-white"
          />
        </div>
        <button
          type="submit"
          className="rounded-[3px] bg-brand-pink px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-pink-dark"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

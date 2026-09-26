import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-dark py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-16">
        <h2 className="mb-12 text-center font-display text-3xl lg:text-4xl">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            aria-label="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="rounded border border-brand-400 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-brand-400 transition-colors hover:bg-brand-400 hover:text-dark"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

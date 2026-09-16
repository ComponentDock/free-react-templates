import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
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
    <>
      <h2 className="mb-6 font-['Playfair_Display',serif] text-2xl font-bold text-text-primary">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label
              htmlFor="fullName"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-text-primary placeholder-text-secondary outline-none focus:border-brand"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-text-primary placeholder-text-secondary outline-none focus:border-brand"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
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
            className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-text-primary placeholder-text-secondary outline-none focus:border-brand"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
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
            className="w-full resize-none border-b border-gray-300 bg-transparent py-2 text-sm text-text-primary placeholder-text-secondary outline-none focus:border-brand"
          />
        </div>
        <button
          type="submit"
          className="rounded-[3px] bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

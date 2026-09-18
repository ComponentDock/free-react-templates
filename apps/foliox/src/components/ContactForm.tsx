import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    telephone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-heading">Contact</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>
      </div>

      <div className="bg-surface pb-24">
        <div className="mx-auto max-w-3xl px-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
              />
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-heading px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

import { MapPin } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Form */}
          <div className="lg:w-5/12">
            <div className="mb-6">
              <h2 className="mb-2 text-3xl font-bold text-ink">GET IN TOUCH</h2>
              <p className="text-mist">Send us a message, we will call back later</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink"
              />
              <button
                type="submit"
                className="mt-2 w-fit rounded bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Map placeholder */}
          <div className="lg:w-7/12">
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg bg-gray-200">
              <div className="text-center text-mist">
                <MapPin className="mx-auto mb-2 h-12 w-12 text-brand" />
                <p>505 Silk Rd, New York</p>
                <p className="text-sm">+1 234 122 122</p>
                <p className="text-sm">info@verdant.garden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

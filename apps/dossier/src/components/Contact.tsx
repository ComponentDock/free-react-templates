import { MapPin, Phone, Mail } from 'lucide-react'
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
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Wanna Start Work With Me?
        </h2>
        <p className="mb-12 text-center text-lg text-leaf-400">Get In Touch</p>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-leaf-400 focus:outline-none focus:ring-2 focus:ring-leaf-400/20"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-leaf-400 focus:outline-none focus:ring-2 focus:ring-leaf-400/20"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-leaf-400 focus:outline-none focus:ring-2 focus:ring-leaf-400/20"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-leaf-400 focus:outline-none focus:ring-2 focus:ring-leaf-400/20"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-leaf-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-leaf-500"
            >
              Send Message
            </button>
          </form>

          {/* Contact details */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900">My Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-leaf-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Design Street, San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-leaf-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-leaf-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">alex@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

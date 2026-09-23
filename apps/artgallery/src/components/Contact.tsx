import { type FormEvent, useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">
          <span className="font-[family-name:var(--font-playfair)]">Contact Us</span>
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info + map */}
          <div>
            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-navy">Address</p>
                  <p className="text-sm text-muted">123 Art Avenue, Gallery District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p className="text-sm text-muted">info@artgallery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-navy">Phone</p>
                  <p className="text-sm text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="flex h-64 items-center justify-center rounded-lg bg-light-bg text-sm text-muted">
              <span>Map Placeholder</span>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-navy">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

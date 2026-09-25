import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-[3px] text-brand">
            Contact
          </span>
          <h2 className="mb-4 text-[40px] font-semibold text-dark">Contact Us</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-dark">Address</h3>
                  <p className="text-text-light">123 Creative Street, Design City, DC 12345</p>
                </div>
              </div>
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-dark">Phone</h3>
                  <p className="text-text-light">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-dark">Email</h3>
                  <p className="text-text-light">hello@spectra.dev</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="rounded-lg bg-brand/5 p-8 text-center">
                <h3 className="mb-2 text-xl font-semibold text-dark">Thank you!</h3>
                <p className="text-text-light">
                  Your message has been sent. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-lg border border-gray-200 bg-light px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-brand"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-lg border border-gray-200 bg-light px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-brand"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-light px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-brand"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 bg-light px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-brand"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

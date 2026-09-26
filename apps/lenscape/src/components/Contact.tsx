import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact-section" className="bg-light-bg py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Thank you!</h2>
          <p className="text-muted">Your message has been sent. I&apos;ll get back to you soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-section" className="bg-light-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
            Contact
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="mt-1 text-gold" />
              <div>
                <h3 className="mb-1 font-semibold">Address</h3>
                <p className="text-sm text-muted">
                  198 West 21th Street, Suite 721, San Francisco, CA 94110
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="mt-1 text-gold" />
              <div>
                <h3 className="mb-1 font-semibold">Phone</h3>
                <p className="text-sm text-muted">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="mt-1 text-gold" />
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <p className="text-sm text-muted">alex@lenscape.dev</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} aria-label="Contact form" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Subject</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-gold focus:outline-none"
                required
              />
            </label>
            <button
              type="submit"
              className="self-start bg-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-dark-card p-8 rounded-lg text-center">
                <p className="text-brand text-lg font-semibold">
                  Your message was sent, thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Write your message...
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center shrink-0">
                <Mail size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <p className="text-gray-400 text-sm">info@yourdomain.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center shrink-0">
                <Phone size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                <p className="text-gray-400 text-sm">+12 345 6789 012</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Address</p>
                <p className="text-gray-400 text-sm">
                  273 South Riverview Rd.
                  <br />
                  New York, NY 10011
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Phone } from 'lucide-react'

export function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-light" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded p-8 text-center shadow-sm">
                <p className="text-lg font-semibold text-brand">
                  Thank you! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-1">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-brand-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Hours box */}
          <div className="relative">
            <div className="bg-brand text-white py-10 px-6 shadow-lg lg:absolute lg:right-0 lg:top-0 lg:w-full">
              <strong className="text-lg font-black uppercase block mb-1">Hours</strong>
              <p className="text-sm mb-4">Opening: 7:30am — Closing: 9:00pm</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gold/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

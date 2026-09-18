import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-[#eff1f3] py-16" aria-label="Contact">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Contact Us
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          Ready to start your transformation? Get in touch with us today.
        </p>

        {/* Info Columns */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <MapPin size={24} className="text-white" />
            </div>
            <h4 className="mb-1 font-bold text-[#212529]">Address</h4>
            <p className="text-sm text-[#737373]">123 Coaching Lane, Suite 100</p>
            <p className="text-sm text-[#737373]">New York, NY 10001</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Phone size={24} className="text-white" />
            </div>
            <h4 className="mb-1 font-bold text-[#212529]">Phone</h4>
            <p className="text-sm text-[#737373]">+1 (555) 123-4567</p>
            <p className="text-sm text-[#737373]">Mon – Fri: 9am – 6pm</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Mail size={24} className="text-white" />
            </div>
            <h4 className="mb-1 font-bold text-[#212529]">Email</h4>
            <p className="text-sm text-[#737373]">info@northstar.com</p>
            <p className="text-sm text-[#737373]">support@northstar.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1 block text-sm font-semibold text-[#212529]"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-semibold text-[#212529]">
                First Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#212529]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-[#212529]">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="rounded bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#0265c5]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

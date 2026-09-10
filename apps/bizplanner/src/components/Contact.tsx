import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-section" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-heading">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-bold uppercase text-heading">Contact Info</h3>
            <div className="space-y-4 text-sm text-smoke">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-bold text-heading">Address</p>
                  <p>123 Business Ave, Suite 100</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-bold text-heading">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-bold text-heading">Email</p>
                  <p>info@bizplanner.com</p>
                </div>
              </div>
            </div>
            <div className="mt-6 h-48 w-full overflow-hidden rounded bg-gray-200">
              <div className="flex h-full items-center justify-center text-sm text-smoke">
                Our Location
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded border border-primary-500 bg-white p-8 text-center">
                <div>
                  <p className="mb-2 text-lg font-bold text-primary-500">Message Sent!</p>
                  <p className="text-sm text-smoke">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="mb-2 text-lg font-bold uppercase text-heading">Send Message</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="border border-primary-500 bg-primary-500 px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-600"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

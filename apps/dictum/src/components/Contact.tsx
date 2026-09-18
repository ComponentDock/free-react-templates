import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const serviceList = [
  'Business Consulting',
  'Market Analysis',
  'User Monitoring',
  'Insurance Consulting',
  'Financial Investment',
  'Financial Management',
]

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  return (
    <section id="contact-section" className="py-20 bg-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">Contact Form</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold text-ink mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s} className="flex items-center gap-3 text-smoke text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-300" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4 text-sm text-smoke">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-300" />
                <span>233 Salonica, Suite 130, FL 32807</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-300" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-300" />
                <span>info@dictum.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary-300" />
                <span>Mon - Fri: 9am - 5pm</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                  aria-label="First Name"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                  aria-label="Last Name"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                aria-label="Email"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                aria-label="Subject"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                aria-label="Message"
              />
              <button
                type="submit"
                className="bg-primary-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

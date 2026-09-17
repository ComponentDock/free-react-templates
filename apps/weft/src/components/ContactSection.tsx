import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  return (
    <div className="bg-bg-light px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative mb-12 text-2xl font-medium text-heading lg:text-3xl">
          Contact Us
          <span className="absolute bottom-[-10px] left-[2px] h-[2px] w-[30px] bg-accent" />
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-heading">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-heading">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-heading">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-heading">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-btn-primary px-12 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-btn-dark"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h4 className="mb-1 text-sm font-medium text-heading">Email</h4>
                <p className="text-sm text-text">hello@weft.agency</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h4 className="mb-1 text-sm font-medium text-heading">Phone</h4>
                <p className="text-sm text-text">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h4 className="mb-1 text-sm font-medium text-heading">Address</h4>
                <p className="text-sm text-text">
                  123 Creative Lane
                  <br />
                  Design District, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

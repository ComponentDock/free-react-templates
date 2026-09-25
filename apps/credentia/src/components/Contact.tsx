import { useState, type FormEvent, type ChangeEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-white text-dark focus:outline-none focus:border-dark"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-white text-dark focus:outline-none focus:border-dark"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-white text-dark focus:outline-none focus:border-dark"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded bg-white text-dark focus:outline-none focus:border-dark resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-block border-2 border-dark text-dark font-bold text-xs uppercase tracking-wider px-10 py-4 hover:text-accent hover:border-accent transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-dark">Address</h3>
                <p className="text-muted">Rosia Road 55, Gibraltar, UK</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-dark">Phone</h3>
                <p className="text-muted">+43 5266 22 345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-dark">Email</h3>
                <p className="text-muted">mariawilliams@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

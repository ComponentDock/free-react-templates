import { Globe, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Globe,
    text: 'info@domain.com',
    href: 'mailto:info@domain.com',
  },
  {
    icon: MapPin,
    text: '198 West 21th Street, Suite 721 New York NY 10016',
    href: undefined,
  },
  {
    icon: Phone,
    text: '+123 456 7890',
    href: 'tel:+1234567890',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">
          Get in Touch
        </span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-10">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-text-secondary hover:text-brand transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-text-secondary">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-border rounded-md bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-border rounded-md bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-border rounded-md bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-border rounded-md bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover text-white font-medium px-6 py-3 rounded-md transition-colors"
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

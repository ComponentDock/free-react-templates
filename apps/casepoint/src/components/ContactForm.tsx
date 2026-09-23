import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [area, setArea] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !area || !email || !message) return
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className={cn('py-20 bg-cover bg-center', className)}
      style={{ backgroundImage: 'url(https://picsum.photos/seed/casepoint-contact/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-brand-darker/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-14 h-0.5 bg-brand" />
          <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
            Fill up to get a quote
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-12">
          World&apos;s Leading Law Consultancy Agency !
        </h2>

        {submitted ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-brand font-semibold text-lg">
              Thank you! We will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              >
                <option value="">Select Practice Area</option>
                <option value="health">Health Law</option>
                <option value="insurance">Insurance Law</option>
                <option value="vehicle">Vehicle Accident</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="w-full py-4 bg-brand-dark text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand transition-colors"
            >
              Submit Now
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

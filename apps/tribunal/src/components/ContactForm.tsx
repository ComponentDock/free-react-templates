import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !subject || !message) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className={cn('py-20 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
            Free Legal Consultation
          </h2>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto text-center py-12 bg-bg-light rounded-lg">
            <p className="text-brand font-semibold text-lg">
              Thank you! We will contact you shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={7}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-brand text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand-dark transition-colors"
              >
                Send Message
              </button>
            </form>

            <div
              className="bg-bg-light flex items-center justify-center min-h-[300px] rounded-lg"
              role="img"
              aria-label="Map placeholder"
            >
              <span className="text-text-muted text-sm">Map</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

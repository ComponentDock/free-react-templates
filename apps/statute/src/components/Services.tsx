import { type FormEvent, useState } from 'react'
import { Users, Briefcase, Shield, Scale } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Family Law',
    description:
      'We help families navigate divorce, custody, and adoption matters with compassion and expertise.',
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    description:
      'Expert guidance on contracts, compliance, and corporate事务 to protect your business interests.',
  },
  {
    icon: Shield,
    title: 'Insurance Law',
    description:
      'We fight insurance companies to ensure you receive the coverage and compensation you deserve.',
  },
  {
    icon: Scale,
    title: 'Criminal Law',
    description:
      'Aggressive defense representation for all criminal charges, protecting your rights at every stage.',
  },
] as const

export function Services() {
  const [email, setEmail] = useState('')
  const [replyTo, setReplyTo] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="services" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Quote form */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Request A Quote</h2>
            {submitted ? (
              <p className="text-brand">Thank you! We will get back to you shortly.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-brand focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Reply-to email"
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                  required
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-brand focus:outline-none"
                />
                <textarea
                  placeholder="Your message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="rounded bg-light-bg p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
                    <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

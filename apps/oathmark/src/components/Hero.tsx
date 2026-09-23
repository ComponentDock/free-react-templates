import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !date) return
    setSubmitted(true)
  }

  return (
    <section
      id="home"
      className={cn('relative bg-cover bg-center min-h-[600px] flex items-center', className)}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/oathmark-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Notary Public &amp; Legal Solutions
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              We provide professional notary public services and comprehensive legal solutions. Our
              experienced team is dedicated to delivering reliable and effective legal assistance
              tailored to your needs.
            </p>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Book an Appointment
            </h2>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-brand font-semibold text-lg">
                  Thank you! Your appointment has been booked.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    aria-label="Date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full px-6 py-3 bg-brand text-white font-semibold hover:bg-brand/90 transition-colors"
                >
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

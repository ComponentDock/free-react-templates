import { useState } from 'react'

const serviceOptions = [
  'Select Service',
  'Service One',
  'Service Two',
  'Service Three',
  'Service Four',
]

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function About() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  return (
    <section id="about" className="py-20 bg-paper">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">
              Brand new approach to industrial solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
              We&apos;ve built a legacy that will transform your operations
            </h2>
            <p className="text-mist mb-3">
              We listen to your needs and deliver excellence every time.
            </p>
            <p className="text-mist leading-relaxed mb-8">
              With decades of experience in industrial engineering and manufacturing, we provide
              end-to-end solutions that streamline your operations, reduce costs, and maximize
              efficiency across every facet of your business.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Get Started Now
            </a>
          </div>

          {/* Right: quote form */}
          <div className="bg-ink rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand"
                aria-label="Select service"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-ink">
                    {opt}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand"
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand resize-none"
              />
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded transition-colors"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative py-16" data-testid="newsletter">
      <img
        src="https://picsum.photos/seed/landcraft-newsletter/1920/300"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Sign Up for Newsletter</h2>
            <p className="text-white/80 text-sm">
              We'll keep you informed about seasonal tips, new services, and exclusive offers.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

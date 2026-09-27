import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section
      className="relative py-20"
      aria-labelledby="newsletter-heading"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/bluecoast-nl/1920/600)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-green/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-white">
            <h2 id="newsletter-heading" className="text-3xl font-bold">
              Are you buying or selling?
            </h2>
            <p className="mt-2 text-white/80">
              Subscribe to our newsletter for the latest property updates and market insights.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full bg-white/90 px-6 py-3 text-sm text-text-dark placeholder-text-light outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-text-dark transition-opacity hover:opacity-90"
            >
              subscribe now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

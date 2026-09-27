import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-30 bg-text-primary relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/craftfolio-newsletter/1920/600')",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
        <p className="text-white/70 mb-8">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-full font-body text-sm flex-1 max-w-md bg-white text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
          <button
            type="submit"
            className="bg-brand text-white font-body text-sm font-medium px-8 py-3 rounded-full hover:bg-brand-dark transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

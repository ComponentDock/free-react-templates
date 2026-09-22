import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative flex min-h-[300px] items-center justify-center bg-bg-dark">
      <img
        src="https://picsum.photos/seed/regalia-newsletter/1600/350"
        alt="Newsletter background"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 max-w-lg px-4 text-center text-white">
        <h2 className="mb-3 font-heading text-3xl font-semibold">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-gray-300">
          Get exclusive offers and updates delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded px-4 py-3 text-sm text-gray-800"
          />
          <button
            type="submit"
            className="rounded bg-accent-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-gold-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

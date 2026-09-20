import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative bg-dark-brown py-24" style={{ backgroundAttachment: 'fixed' }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/meetuply-newsletter/1920/800)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-xl px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-sm text-gray-300">
          Get the latest updates on speakers, schedules, and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-sm border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-300 backdrop-blur-sm focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-sm bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

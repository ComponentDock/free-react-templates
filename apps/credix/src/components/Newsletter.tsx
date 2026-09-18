import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,54,121,0.85), rgba(0,54,121,0.85)), url('https://picsum.photos/seed/credix-newsletter/1600/900')",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white">Subscribe to our newsletter</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md overflow-hidden rounded"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
            required
            className="flex-1 px-4 py-3 text-sm text-gray-900 outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-gold-400 px-6 py-3 text-sm font-bold text-navy-700 transition hover:bg-gold-500"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-200">
          Curabitur elit turpis, maximus quis ullamcorper sed, maximus eu neque. Cras ultrices erat
          nec auctor blandit.
        </p>
      </div>
    </section>
  )
}

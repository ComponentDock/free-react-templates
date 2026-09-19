import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/stall-newsletter/1920/600')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black uppercase tracking-wide text-white">
          Get Notified on Each Updates
        </h2>
        <p className="mt-3 text-gray-200">
          Subscribe to our newsletter for the latest deals and new arrivals.
        </p>
        <form className="mx-auto mt-8 flex max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-none border-0 px-4 py-3 text-sm text-gray-700 outline-none"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="rounded-none bg-brand px-8 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

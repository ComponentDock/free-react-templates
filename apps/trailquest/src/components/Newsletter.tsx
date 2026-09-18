import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/trailquest-newsletter/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-xl px-4 text-center">
        <h2 className="font-display text-3xl text-white md:text-4xl">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-3 text-white/70">
          Get the latest travel deals and inspiration delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setEmail('')
          }}
          className="mt-6 flex gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-full px-5 py-3 text-sm focus:outline-none"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

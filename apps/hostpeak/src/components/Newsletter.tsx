import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-heading lg:text-4xl">
          Subscribe To Get Our Newsletter
        </h2>
        <p className="mb-10 text-base text-body">
          Stay updated with the latest hosting tips, exclusive deals, and industry news delivered
          straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-b border-border bg-transparent px-2 py-3 text-sm text-body placeholder:text-body focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-brand-start to-brand-end px-8 py-3 text-sm font-medium text-white shadow-xl shadow-brand-start/20 transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

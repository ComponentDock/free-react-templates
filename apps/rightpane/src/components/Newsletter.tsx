import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
        Subscribe for newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          className="w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="rounded bg-white/20 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

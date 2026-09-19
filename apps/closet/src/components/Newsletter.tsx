import { useState } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-slate py-12" aria-label="Newsletter">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 md:flex-row">
          <div className="flex items-center gap-3 text-ink">
            <Send size={24} aria-hidden="true" />
            <h2 className="text-xl font-bold">Sign Up for a Newsletter</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded border border-gray-300 bg-white px-4 py-3 text-sm text-body placeholder:text-mist"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

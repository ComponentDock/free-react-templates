import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-ink">Subscribe Newsletter</h2>
        <p className="mb-8 text-sm text-mist">
          Stay updated with our latest news, projects, and creative insights.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-lg gap-3"
          aria-label="Newsletter subscription"
        >
          <input
            type="email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{
              backgroundImage: 'linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)',
            }}
          >
            Get Started
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

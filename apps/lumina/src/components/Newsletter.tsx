import { type FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section className="bg-yellow py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-medium text-ink">
            Together, <br />
            Let's Make This Happen
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative mx-auto max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-full bg-white px-6 py-4 pr-40 text-sm text-ink outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-6 py-2.5 text-sm font-medium uppercase text-white transition hover:bg-brand-dark"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

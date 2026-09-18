import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">Subscribe for our Newsletter</h3>
          <span className="mb-8 block text-sm font-semibold uppercase tracking-wider text-orange-500">
            Re-imagining the way
          </span>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-sm outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get Started
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

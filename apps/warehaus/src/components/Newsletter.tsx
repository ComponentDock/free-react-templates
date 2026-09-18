import { type FormEvent } from 'react'
import { Send } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Newsletter() {
  return (
    <section className="bg-dark py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our newsletter</h2>
          <p className="mb-8 text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              placeholder="Enter email address"
              aria-label="Email address"
              className="flex-1 rounded-l px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-r bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

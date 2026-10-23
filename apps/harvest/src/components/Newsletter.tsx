import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section id="newsletter" className="relative overflow-hidden bg-brand py-14 md:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-white">Our Produce Is Mainstay For Us</h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-white/80">
          Subscribe to our newsletter and get fresh harvest updates, recipes, and special offers.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md items-stretch gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="h-12 min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="flex h-12 items-center gap-2 rounded-full bg-night px-6 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Subscribe
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

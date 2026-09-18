import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/farmnewsletter/1920/400')`,
      }}
    >
      <div className="absolute inset-0 bg-brand/85" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-white/80">
          Get the latest updates on our agricultural products, services, and farming tips delivered
          directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded px-4 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded bg-accent px-6 py-3 font-semibold text-ink transition-colors hover:bg-accent/80"
          >
            <Send size={16} />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

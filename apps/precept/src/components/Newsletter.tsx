import { Send } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-brand py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-white text-xl md:text-2xl font-bold">
          Subscribe to Get Updated Information
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 text-sm flex-1 md:w-72 border-none outline-none"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-heading transition-colors flex items-center gap-2"
            aria-label="Subscribe"
          >
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

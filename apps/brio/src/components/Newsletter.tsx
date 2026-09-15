import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-brio-black py-16 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-2 text-2xl font-semibold">Subscribe for our Newsletter</h2>
        <p className="mb-8 text-white/60">We won&rsquo;t send any kind of spam</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brio-pink"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brio-pink bg-brio-pink px-8 py-3 text-sm font-medium text-white transition hover:bg-brio-pink/90"
          >
            Get Started
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

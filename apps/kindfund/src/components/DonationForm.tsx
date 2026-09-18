import { useState } from 'react'

const amounts = [25, 50, 100, 200]

export function DonationForm() {
  const [selected, setSelected] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-heading text-3xl text-white">Pure Water Is More Essential</h2>
        <p className="mt-3 text-white/60">Make a Donation</p>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-wrap justify-center gap-3">
            {amounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setSelected(amt)}
                className={`rounded px-6 py-2 text-sm font-semibold transition-colors ${
                  selected === amt
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your name"
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Your email"
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="rounded bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  )
}

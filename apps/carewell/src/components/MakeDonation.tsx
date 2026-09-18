import { useState } from 'react'

const amounts = [10, 50, 100, 250] as const

export function MakeDonation() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="donate" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-2xl font-medium text-text-primary md:text-3xl">
          Make a Donation Today
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm text-text-muted">
          The French Revolution constituted for the conscience of the dominant aristocratic class a
          fall from innocence the natural chain of events.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              className={`border px-8 py-3 text-sm font-bold tracking-wider transition-colors ${
                selected === amount
                  ? 'border-brand bg-brand text-white'
                  : 'border-border bg-white text-text-primary hover:border-brand hover:text-brand'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm text-text-muted">
          <span className="font-medium text-text-primary">USD</span>
        </div>

        <button
          className="bg-brand px-10 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          onClick={() => {
            /* donation action */
          }}
        >
          Donate Now
        </button>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { overlap } from '../data'

/** Three-column strip overlapping the hero bottom edge: two orange feature
 *  cards and a dark free-quote form with a client-side success state. */
export function OverlapStrip() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" aria-label="Free quote" className="relative z-[9] -mt-[100px] px-4">
      <div className="mx-auto grid max-w-6xl md:grid-cols-3">
        {overlap.cards.map((card) => (
          <div
            key={card.title}
            className={`flex h-full flex-col items-center px-12 py-8 text-center text-[15px] ${
              card.title === '24/7 Support' ? 'bg-orange-dark' : 'bg-brand'
            } text-white/60`}
          >
            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50"
            >
              <card.icon className="h-9 w-9 text-white" strokeWidth={1.5} />
            </span>
            <h2 className="my-4 text-[22px] font-bold uppercase text-white">{card.title}</h2>
            <p>{card.body}</p>
          </div>
        ))}

        <div className="bg-quote-dark px-12 py-8 text-center">
          <h2 className="my-4 text-[22px] font-bold uppercase text-white">{overlap.quote.title}</h2>
          {submitted ? (
            <p role="status" className="py-6 text-[15px] text-white/60">
              {overlap.quote.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="text-left">
              {overlap.quote.fields.map((field) => (
                <div key={field.label} className="mb-3">
                  <label htmlFor={`shiply-${field.label.toLowerCase()}`} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    id={`shiply-${field.label.toLowerCase()}`}
                    name={field.label.toLowerCase()}
                    placeholder={field.placeholder}
                    required
                    className="h-[43px] w-full border-2 border-white/50 bg-transparent px-3 text-[13px] italic text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-brand py-2 px-4 uppercase tracking-[0.2em] text-white transition-colors hover:bg-orange-dark"
              >
                {overlap.quote.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

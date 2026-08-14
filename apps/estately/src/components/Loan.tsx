import type { FormEvent } from 'react'
import { loan } from '../data'

/** Dark charcoal mortgage-qualification section: heading + paragraph plus a
 *  centered form with "Your income" and "Amount needed" inputs and a red
 *  Submit button. Submitting never navigates or reloads. */
export function Loan() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="bg-charcoal py-24 lg:py-[110px]">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-4xl font-bold text-white lg:text-[44px]">{loan.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60">{loan.text}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          aria-label="Mortgage qualification"
        >
          <input
            type="text"
            placeholder={loan.incomePlaceholder}
            className="h-[61px] w-full max-w-sm bg-white px-6 text-base italic text-input outline-none"
          />
          <input
            type="text"
            placeholder={loan.amountPlaceholder}
            className="h-[61px] w-full max-w-sm bg-white px-6 text-base italic text-input outline-none"
          />
          <button
            type="submit"
            className="min-w-[156px] bg-brand px-8 py-4 font-heading text-base font-bold uppercase text-white transition-colors hover:bg-primary-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

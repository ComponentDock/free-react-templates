import { useState } from 'react'
import { Check, Phone, Star } from 'lucide-react'
import { contact, fields, hero, needs, quoteForm } from '../content'

const STAR_SLOTS = [0, 1, 2, 3, 4]

export interface StarRowProps {
  /** `amber` in the hero rating line, brand blue on the review cards. */
  tone: 'amber' | 'brand'
  size?: string
}

export function StarRow({ tone, size = 'h-4 w-4' }: StarRowProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex gap-0.5 ${tone === 'amber' ? 'text-amber-400' : 'text-primary-400'}`}
    >
      {STAR_SLOTS.map((slot) => (
        <Star key={slot} className={`${size} fill-current`} />
      ))}
    </span>
  )
}

/**
 * White card under the hero copy: three required fields, one submit, and the
 * thank-you copy the reference serves from its own page after a successful
 * submit. Nothing leaves the browser here.
 */
export function QuoteForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8 dark:border-gray-800 dark:bg-gray-900">
        <div role="status" aria-live="polite">
          <h2 className="text-xl font-bold text-ink-800 lg:text-2xl dark:text-white">
            {quoteForm.thanksTitle}
          </h2>
          <p className="mt-3 text-base text-ink-500 dark:text-gray-400">{quoteForm.thanksBody}</p>
          <a
            href={contact.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-base font-bold text-primary-700 dark:text-primary-300"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {contact.phone}
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 w-full rounded-lg border border-ink-200 px-6 py-3 text-base font-bold text-ink-700 transition-colors hover:bg-ink-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {quoteForm.again}
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl dark:text-white">
        {quoteForm.title}
      </h2>
      <p className="mt-2 text-sm text-ink-500 dark:text-gray-400">{quoteForm.sub}</p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(event) => {
          event.preventDefault()
          event.currentTarget.reset()
          setSent(true)
        }}
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={`quote-${field.name}`}
              className="block text-sm font-semibold text-ink-700 dark:text-gray-300"
            >
              {field.label}
            </label>
            <input
              id={`quote-${field.name}`}
              name={field.name}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 placeholder:text-ink-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="quote-need"
            className="block text-sm font-semibold text-ink-700 dark:text-gray-300"
          >
            {quoteForm.selectLabel}
          </label>
          <select
            id="quote-need"
            name="need"
            required
            defaultValue=""
            className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="" disabled>
              {quoteForm.selectPlaceholder}
            </option>
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none"
        >
          {quoteForm.submit}
        </button>

        <p className="text-center text-xs text-ink-400">{quoteForm.finePrint}</p>
      </form>
    </div>
  )
}

/** 7/5 split on the hero ground: the argument left, the quote card right. */
export function Hero() {
  return (
    <section className="bg-ink-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl dark:text-white">
              {hero.headline}
              <br />
              <span className="text-primary-600 dark:text-primary-400">{hero.headlineAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-ink-500 dark:text-gray-400">{hero.lede}</p>

            <ul className="mt-7 space-y-2.5">
              {hero.proof.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-base font-medium text-ink-700 dark:text-gray-300"
                >
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={contact.phoneHref}
                className="text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl dark:text-white"
              >
                {contact.phone}
              </a>
              <p className="flex items-center gap-2 text-sm text-ink-600 dark:text-gray-400">
                <StarRow tone="amber" />
                <span className="font-bold">{hero.rating}</span>
                <span className="opacity-80">{hero.ratingNote}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export function Subscribe() {
  const [email, setEmail] = useState('')

  return (
    <section
      id="subscribe"
      aria-label="Subscribe"
      className="bg-mist py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          Experience the most simple way to manage business
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-accent text-xl text-body dark:text-gray-400">
          Start your free trial today — no credit card required.
        </p>
        <form
          aria-label="Subscribe form"
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-full border border-gray-300 bg-white px-6 py-3.5 text-ink placeholder:text-gray-400 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-primary-600 px-9 py-3.5 font-accent text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

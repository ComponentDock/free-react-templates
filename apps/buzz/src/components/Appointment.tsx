import { useState } from 'react'

export function Appointment() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <section
        id="appointment"
        className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Make an Appointment
          </h2>
          <p
            role="status"
            className="mt-8 rounded-lg border border-brand/30 bg-white px-8 py-6 text-lg text-ink shadow-sm dark:bg-gray-950 dark:text-white"
          >
            Thanks, {name}! Your request has been received — we will get back to you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="appointment"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Make an Appointment
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            I'm available for commissions and collaborations, and i'm excited to hear from you about
            new projects.
          </p>
        </div>
        <form
          className="mt-10 grid gap-6 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-950 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <div>
            <label
              htmlFor="appointment-name"
              className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink dark:text-white"
            >
              Your name
            </label>
            <input
              id="appointment-name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="John Doe"
              className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="appointment-email"
              className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink dark:text-white"
            >
              Your email
            </label>
            <input
              id="appointment-email"
              type="email"
              required
              placeholder="john@example.com"
              className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="rounded-none border border-brand bg-brand px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark sm:col-span-2"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

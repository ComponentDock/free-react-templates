import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const subjects = ['Beauty Massage', 'Facial Massage', 'Skin Care', 'Makeup', 'Others'] as const

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-brand-soft py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Beauty Appointment
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl dark:text-white">
            Make An Appointment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Appointment form"
          className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Full Name"
                className="w-full rounded-lg border border-ink/10 bg-brand-soft px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-white/10 dark:bg-gray-950 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-lg border border-ink/10 bg-brand-soft px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-white/10 dark:bg-gray-950 dark:text-white"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="subject" className="sr-only">
              Select Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-ink/10 bg-brand-soft px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none dark:border-white/10 dark:bg-gray-950 dark:text-white"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full resize-none rounded-lg border border-ink/10 bg-brand-soft px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-white/10 dark:bg-gray-950 dark:text-white"
            />
          </div>
          <div className="mt-6">
            {submitted ? (
              <p role="status" className="text-sm font-medium text-brand">
                Thank you! Your appointment request has been sent.
              </p>
            ) : (
              <Button type="submit" variant="primary" className="w-full rounded-full">
                Send Message
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

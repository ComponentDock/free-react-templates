import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function RsvpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Errors = {
      name: name.trim() ? undefined : 'Please enter your name.',
      email: EMAIL_PATTERN.test(email) ? undefined : 'Please enter a valid email address.',
      message: message.trim() ? undefined : 'Please leave us a message.',
    }
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="bg-smoke-500 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-300 sm:text-6xl">
          Are Your Attending?
        </h2>
        <p className="mt-4 text-center text-sm text-white/80">
          Kindly respond before the 1st of December — we can&apos;t wait to celebrate with you.
        </p>
        {submitted ? (
          <p
            role="status"
            className="mt-10 rounded-lg border border-white/25 bg-white/10 p-6 text-center text-white"
          >
            Thank you! We look forward to celebrating with you.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="h-[52px] w-full border border-white/25 bg-white px-4 text-sm text-ink-900 placeholder:text-stone-400 focus:border-white focus:outline-none"
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-sm text-pink-100">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="h-[52px] w-full border border-white/25 bg-white px-4 text-sm text-ink-900 placeholder:text-stone-400 focus:border-white focus:outline-none"
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-pink-100">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="guests" className="sr-only">
                Guest
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className="h-[52px] w-full border border-white/25 bg-white px-4 text-sm text-ink-900 focus:border-white focus:outline-none"
              >
                <option value="">Select guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={5}
                className="w-full border border-white/25 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-stone-400 focus:border-white focus:outline-none"
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-sm text-pink-100">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              className="h-[52px] w-full rounded-none bg-pink-500 text-base font-semibold text-white hover:bg-pink-600"
            >
              I am attending
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { subscribe } from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Subscribe band (reference `.ftco-subscribe.img`): dark background image
 *  with a centered white heading and an inline email form (gold submit
 *  button) that validates before confirming. */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError(subscribe.error)
      setConfirmed(false)
      return
    }
    setError('')
    setConfirmed(true)
    setEmail('')
  }

  return (
    <section aria-label="Subscribe" className="relative py-24">
      <img
        src="https://picsum.photos/seed/kickoff-subscribe/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-4xl font-black text-white">{subscribe.heading}</h2>

        {confirmed ? (
          <p role="status" className="mt-8 text-lg text-white">
            {subscribe.success}
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={subscribe.placeholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'subscribe-error' : undefined}
              className="h-[55px] w-full max-w-md bg-white px-4 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="h-[55px] shrink-0 bg-gold px-8 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
            >
              {subscribe.button}
            </button>
          </form>
        )}
        {error ? (
          <p id="subscribe-error" role="alert" className="mt-3 text-sm text-gold">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}

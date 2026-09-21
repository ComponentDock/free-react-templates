import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Signup() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-ink py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Sign Up for Our Classes
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          To be invited to the nearest center and get free physical advice to learn more about our
          classes
        </p>
        {submitted ? (
          <div className="mt-8 rounded-lg border border-accent-green/40 bg-accent-green/10 px-6 py-4 text-accent-green">
            Thank you for signing up! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="signup-email" className="sr-only">
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              className="w-full max-w-md rounded px-5 py-3 text-sm text-ink placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-brand sm:flex-1"
            />
            <button
              type="submit"
              className="rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Submit
            </button>
          </form>
        )}
        {error && (
          <p role="alert" className="mt-3 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}

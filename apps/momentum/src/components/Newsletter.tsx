import { type FormEvent, useState } from 'react'
import { newsletter } from '../data'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

interface FormErrors {
  name?: string
  email?: string
}

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: FormErrors = {}
    if (!name.trim()) {
      next.name = newsletter.nameError
    }
    if (!EMAIL_PATTERN.test(email)) {
      next.email = newsletter.emailError
    }
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="bg-light py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-ink md:text-5xl">{newsletter.title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">{newsletter.blurb}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3 md:items-end"
        >
          <div>
            <label htmlFor="newsletter-name" className="sr-only">
              {newsletter.nameLabel}
            </label>
            <input
              id="newsletter-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={newsletter.nameLabel}
              aria-invalid={errors.name ? true : undefined}
              className="w-full border-b border-[#ccc] bg-transparent py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
            />
            {errors.name && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.emailLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={newsletter.emailLabel}
              aria-invalid={errors.email ? true : undefined}
              className="w-full border-b border-[#ccc] bg-transparent py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
            />
            {errors.email && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-full bg-dark-card px-8 py-3.5 text-xs font-bold tracking-[.2rem] text-white uppercase transition-colors hover:bg-transparent hover:text-ink hover:ring-2 hover:ring-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {newsletter.submitLabel}
          </button>
        </form>
        {submitted && (
          <p role="status" className="mt-8 text-center font-medium text-brand">
            {newsletter.successMessage}
          </p>
        )}
      </div>
    </section>
  )
}

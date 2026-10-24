import { useState, type FormEvent } from 'react'

interface FieldErrors {
  name?: string
  email?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Volunteer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [confirmed, setConfirmed] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: FieldErrors = {}
    if (!name.trim()) {
      next.name = 'Please enter your name'
    }
    if (!EMAIL_PATTERN.test(email)) {
      next.email = 'Please enter a valid email address'
    }
    setErrors(next)
    if (next.name || next.email) {
      setConfirmed('')
      return
    }
    setConfirmed(name.trim())
    setName('')
    setEmail('')
  }

  return (
    <section
      id="volunteer"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/alms-volunteer/1600/900')" }}
    >
      <div className="absolute inset-0 bg-brand/90" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <img
          src="https://picsum.photos/seed/alms-volunteer-photo/800/600"
          alt="Volunteers packing food parcels"
          className="rounded-lg shadow-[0_4px_30px_-5px_rgba(0,0,0,0.6)]"
          loading="lazy"
        />
        <div>
          <h2 className="font-heading text-3xl font-light text-white md:text-4xl">
            Be A Volunteer Today
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="volunteer-name" className="sr-only">
                Name
              </label>
              <input
                id="volunteer-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                className="w-full rounded-none border border-transparent bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-ink focus:outline-none"
              />
              {errors.name && (
                <p role="alert" className="mt-2 text-sm font-semibold text-white">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="volunteer-email" className="sr-only">
                Email
              </label>
              <input
                id="volunteer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                className="w-full rounded-none border border-transparent bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-ink focus:outline-none"
              />
              {errors.email && (
                <p role="alert" className="mt-2 text-sm font-semibold text-white">
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-none border-2 border-transparent bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              Send Application
            </button>

            {confirmed && (
              <p role="status" className="text-sm font-semibold text-white">
                Thanks, {confirmed}! Our volunteer team will be in touch.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

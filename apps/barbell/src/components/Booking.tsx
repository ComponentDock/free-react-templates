import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Booking() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: { name?: string; phone?: string; email?: string } = {}
    if (!name.trim()) nextErrors.name = 'Your name is required.'
    if (!phone.trim()) nextErrors.phone = 'Your phone number is required.'
    if (!EMAIL_PATTERN.test(email.trim())) nextErrors.email = 'A valid email address is required.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="classes" className="bg-mist">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p role="status" className="font-display text-2xl font-medium text-ink">
            Thanks, {name.trim()}! We will contact you shortly.
          </p>
        </div>
      </section>
    )
  }

  const inputClass =
    'h-12 w-full rounded-none border-0 bg-white px-5 font-display text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand'

  return (
    <section id="classes" className="bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative flex min-h-[280px] items-center overflow-hidden bg-brand">
          <img
            src="https://picsum.photos/seed/barbell-box2/900/420"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="relative z-10 px-8 py-10 sm:px-12">
            <h2 className="font-display text-4xl font-medium uppercase text-white md:text-5xl">
              Book Your First Class
            </h2>
            <p className="mt-4 max-w-md text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="bg-mist px-6 py-10 sm:px-12">
          <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="sr-only">
                Your Name
              </label>
              <input
                id="booking-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                aria-invalid={Boolean(errors.name)}
                className={inputClass}
              />
              {errors.name ? (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="booking-phone" className="sr-only">
                Your Phone
              </label>
              <input
                id="booking-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Your Phone"
                aria-invalid={Boolean(errors.phone)}
                className={inputClass}
              />
              {errors.phone ? (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="booking-email" className="sr-only">
                E-mail Address
              </label>
              <input
                id="booking-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail Address"
                aria-invalid={Boolean(errors.email)}
                className={inputClass}
              />
              {errors.email ? (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="flex items-start">
              <button
                type="submit"
                className="h-12 w-full bg-brand px-8 font-display text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

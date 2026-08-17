import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { APPOINTMENT, IMAGES } from '../data'
import { greenButton } from './buttonClasses'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Appointment — full-width band under a 95% brand-green overlay with the
    "Who We Are" column and a white "Drop A Message" form with client-side
    validation. */
export function Appointment() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update =
    (field: keyof typeof values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!EMAIL_RE.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!message) nextErrors.message = 'Please write a short message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setValues({ name: '', email: '', message: '' })
    }
  }

  return (
    <section
      id="appointment"
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${IMAGES.appointment})` }}
    >
      <div className="absolute inset-0 bg-brand/95" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div className="text-white">
          <h3 className="font-display text-2xl">{APPOINTMENT.subheading}</h3>
          <h2 className="mt-3 font-display text-4xl">{APPOINTMENT.title}</h2>
          <p className="mt-5 max-w-md text-base text-white/80">{APPOINTMENT.blurb}</p>
          <ul className="mt-6 space-y-3">
            {APPOINTMENT.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-white" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 sm:p-10">
          <h3 className="font-display text-2xl text-ink">{APPOINTMENT.heading}</h3>
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="medair-name" className="sr-only">
                {APPOINTMENT.placeholders.name}
              </label>
              <input
                id="medair-name"
                name="name"
                placeholder={APPOINTMENT.placeholders.name}
                value={values.name}
                onChange={update('name')}
                className="w-full border border-black/20 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.name && (
                <p role="alert" className="mt-1 text-xs font-medium text-brand">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="medair-email" className="sr-only">
                {APPOINTMENT.placeholders.email}
              </label>
              <input
                id="medair-email"
                name="email"
                type="email"
                placeholder={APPOINTMENT.placeholders.email}
                value={values.email}
                onChange={update('email')}
                className="w-full border border-black/20 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.email && (
                <p role="alert" className="mt-1 text-xs font-medium text-brand">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="medair-subject" className="sr-only">
                {APPOINTMENT.placeholders.subject}
              </label>
              <select
                id="medair-subject"
                name="subject"
                defaultValue=""
                className="w-full border border-black/20 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              >
                <option value="" disabled>
                  {APPOINTMENT.placeholders.subject}
                </option>
                {APPOINTMENT.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="medair-message" className="sr-only">
                {APPOINTMENT.placeholders.message}
              </label>
              <textarea
                id="medair-message"
                name="message"
                rows={4}
                placeholder={APPOINTMENT.placeholders.message}
                value={values.message}
                onChange={update('message')}
                className="w-full resize-none border border-black/20 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-xs font-medium text-brand">
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className={`${greenButton} w-full`}>
              Send Message
            </button>
            {submitted && (
              <p role="status" className="text-sm font-medium text-green-700">
                Thank you! Your message has been sent — we&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

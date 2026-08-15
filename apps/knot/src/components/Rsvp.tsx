import { useState, type FormEvent } from 'react'
import {
  guestOptions,
  rsvpEmailError,
  rsvpEmailLabel,
  rsvpEmailPlaceholder,
  rsvpGuestsLabel,
  rsvpMessageLabel,
  rsvpMessagePlaceholder,
  rsvpNameError,
  rsvpNameLabel,
  rsvpNamePlaceholder,
  rsvpSubmitLabel,
  rsvpSubtext,
  rsvpSuccessText,
  rsvpSuccessTitle,
  rsvpTitle,
} from '../data'

const emailPattern = /^\S+@\S+\.\S+$/

interface RsvpErrors {
  name?: string
  email?: string
}

export function Rsvp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState<string>(guestOptions[0]!)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<RsvpErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: RsvpErrors = {}
    if (name.trim() === '') nextErrors.name = rsvpNameError
    if (!emailPattern.test(email)) nextErrors.email = rsvpEmailError
    setErrors(nextErrors)
    if (nextErrors.name !== undefined || nextErrors.email !== undefined) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="rsvp-section" className="py-20">
        <div className="mx-auto max-w-[700px] px-4">
          <div className="bg-white p-[51px_40px_60px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl font-normal text-brand">{rsvpSuccessTitle}</h2>
            <p className="mt-6 text-[15px] leading-7">{rsvpSuccessText}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp-section" className="py-20">
      <div className="mx-auto max-w-[700px] px-4">
        <div className="bg-white p-[51px_40px_60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-normal text-brand">{rsvpTitle}</h2>
            <p className="mt-4 text-[15px] leading-7">{rsvpSubtext}</p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="rsvp-name" className="sr-only">
              {rsvpNameLabel}
            </label>
            <input
              id="rsvp-name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={rsvpNamePlaceholder}
              aria-invalid={errors.name !== undefined ? true : undefined}
              aria-describedby={errors.name !== undefined ? 'rsvp-name-error' : undefined}
              className="mb-5 h-[50px] w-full border border-line px-4 text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
            />
            {errors.name !== undefined && (
              <p id="rsvp-name-error" className="-mt-3 mb-5 text-sm text-red-600">
                {errors.name}
              </p>
            )}

            <label htmlFor="rsvp-email" className="sr-only">
              {rsvpEmailLabel}
            </label>
            <input
              id="rsvp-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={rsvpEmailPlaceholder}
              aria-invalid={errors.email !== undefined ? true : undefined}
              aria-describedby={errors.email !== undefined ? 'rsvp-email-error' : undefined}
              className="mb-5 h-[50px] w-full border border-line px-4 text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
            />
            {errors.email !== undefined && (
              <p id="rsvp-email-error" className="-mt-3 mb-5 text-sm text-red-600">
                {errors.email}
              </p>
            )}

            <label htmlFor="rsvp-guests" className="sr-only">
              {rsvpGuestsLabel}
            </label>
            <select
              id="rsvp-guests"
              name="guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mb-5 h-[50px] w-full border border-line px-4 text-body focus:border-brand focus:outline-none"
            >
              {guestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="rsvp-message" className="sr-only">
              {rsvpMessageLabel}
            </label>
            <textarea
              id="rsvp-message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={rsvpMessagePlaceholder}
              className="mb-6 h-[120px] w-full border border-line px-4 py-4 text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-brand px-6 py-[9px] text-xl text-white transition-colors duration-500 hover:bg-brand-hover hover:text-brand"
            >
              {rsvpSubmitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

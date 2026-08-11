import { useId, useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  contactEmail,
  contactEmailLabel,
  contactEmailPlaceholder,
  contactIntro,
  contactInvalidMessage,
  contactLocation,
  contactMessageLabel,
  contactMessagePlaceholder,
  contactNameLabel,
  contactNamePlaceholder,
  contactPhone,
  contactSubmitLabel,
  contactSuccessMessage,
  contactTitle,
} from '../data'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Contact section: validated name/email/message form with a success state,
 *  next to email/phone/location details. */
export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() === '' || !isValidEmail(email) || message.trim() === '') {
      setError(contactInvalidMessage)
      setSent(false)
      return
    }
    setError(null)
    setSent(true)
  }

  const inputClasses =
    'w-full rounded border border-gray-200 bg-mist px-4 py-3 text-sm text-ink placeholder:text-meta focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

  return (
    <section id="contact" aria-label={contactTitle} className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">{contactTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-body">{contactIntro}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            {sent ? (
              <p
                role="status"
                className="rounded-lg bg-frost px-6 py-8 text-center text-sm font-medium text-accent"
              >
                {contactSuccessMessage}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor={nameId}
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body"
                  >
                    {contactNameLabel}
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={contactNamePlaceholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor={emailId}
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body"
                  >
                    {contactEmailLabel}
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={contactEmailPlaceholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor={messageId}
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body"
                  >
                    {contactMessageLabel}
                  </label>
                  <textarea
                    id={messageId}
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={contactMessagePlaceholder}
                    className={inputClasses}
                  />
                </div>
                {error ? (
                  <p role="alert" className="text-xs font-medium text-red-600">
                    {error}
                  </p>
                ) : null}
                <Button type="submit">{contactSubmitLabel}</Button>
              </form>
            )}
          </div>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-frost text-accent">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-meta">Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm font-medium text-ink hover:text-accent"
                >
                  {contactEmail}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-frost text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-meta">Phone</p>
                <a
                  href={`tel:${contactPhone.replace(/[^\d+]/g, '')}`}
                  className="text-sm font-medium text-ink hover:text-accent"
                >
                  {contactPhone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-frost text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-meta">Location</p>
                <p className="text-sm font-medium text-ink">{contactLocation}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

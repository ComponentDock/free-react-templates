import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { CONTACT_INFO } from '../data'
import { contactSchema, fieldErrors, initialContact, type ContactValues } from '../lib/forms'
import { SectionHeading } from './SectionHeading'

const CONTACT_ICONS = { Address: MapPin, Phone, Email: Mail } as const

const fieldClass =
  'h-[55px] w-full rounded border border-transparent bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-brand'

/* Contact Us — contact info column (Address / Phone / Email) beside a
   "Get In Touch" form (First name, Last name, Email, message, Send
   Message). The form validates per-field and shows a success message. */
export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialContact)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  function handleChange(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result) as Partial<Record<keyof ContactValues, string>>)
      setConfirmation('')
      return
    }
    setConfirmation(`Thanks, ${result.data.firstName}! Your message has been sent.`)
    setValues(initialContact)
    setErrors({})
  }

  return (
    <section id="contact" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Contact Us"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-medium uppercase text-ink">Contact Info</h3>
            <ul className="mt-6 space-y-5">
              {CONTACT_INFO.map((item) => {
                const Icon = CONTACT_ICONS[item.label as keyof typeof CONTACT_ICONS]
                const content = (
                  <span className="flex items-start gap-3 text-smoke">
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {item.value}
                  </span>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="transition-colors hover:text-brand">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <h3 className="font-display text-xl font-medium uppercase text-ink">Get In Touch</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {(
                [
                  { key: 'firstName', label: 'First name', type: 'text' },
                  { key: 'lastName', label: 'Last name', type: 'text' },
                ] as const
              ).map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`contact-${field.key}`}
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`contact-${field.key}`}
                    type={field.type}
                    value={values[field.key]}
                    onChange={(event) => handleChange(field.key, event.target.value)}
                    aria-invalid={errors[field.key] ? true : undefined}
                    className={fieldClass}
                  />
                  {errors[field.key] && (
                    <p className="mt-1 text-xs font-medium text-red-600">{errors[field.key]}</p>
                  )}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  className={fieldClass}
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  aria-invalid={errors.message ? true : undefined}
                  className="w-full rounded border border-transparent bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-8 h-[55px] rounded border border-brand bg-brand px-8 font-medium uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              Send Message
            </Button>
            {confirmation && (
              <p
                role="status"
                className="mt-6 rounded border border-brand/30 bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark"
              >
                {confirmation}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

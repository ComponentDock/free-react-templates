import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { contactSchema, fieldErrors, type ContactValues } from '../lib/forms'
import { SectionHeading } from './SectionHeading'

const EMPTY: ContactValues = { name: '', email: '', subject: '', message: '' }

const FIELDS = [
  { name: 'name', label: 'Your name', placeholder: 'Enter your name', type: 'text' },
  { name: 'email', label: 'Email address', placeholder: 'Enter email address', type: 'email' },
  { name: 'subject', label: 'Subject', placeholder: 'Enter your subject', type: 'text' },
] as const

export function Contact() {
  const [values, setValues] = useState<ContactValues>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [sent, setSent] = useState(false)

  function update(name: keyof ContactValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      setErrors(fieldErrors<keyof ContactValues>(parsed.error))
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  return (
    <section id="contact" className="section-gap bg-white">
      <SectionHeading
        title="If you need, Just drop us a line"
        subtitle="Who are in extremely love with eco friendly system."
      />
      <div className="mx-auto max-w-3xl px-6">
        {sent ? (
          <div className="text-center">
            <p role="status" className="text-lg text-heading">
              Thanks! Your message is on its way.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false)
                setValues(EMPTY)
                setErrors({})
              }}
              className="primary-btn mt-8"
            >
              <span>Send another message</span>
              <span className="arrow">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-6">
            {FIELDS.map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <input
                  type={type}
                  name={name}
                  aria-label={label}
                  placeholder={placeholder}
                  value={values[name]}
                  onChange={(e) => update(name, e.target.value)}
                  className="w-full border border-black/10 px-5 py-3.5 outline-none focus:border-[#732bde]"
                />
                {errors[name] ? (
                  <p role="alert" className="mt-2 text-sm font-medium text-red-600">
                    {errors[name]}
                  </p>
                ) : null}
              </div>
            ))}
            <div>
              <textarea
                name="message"
                aria-label="Message"
                placeholder="Message"
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full border border-black/10 px-5 py-3.5 outline-none focus:border-[#732bde]"
              />
              {errors.message ? (
                <p role="alert" className="mt-2 text-sm font-medium text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <div>
              <button type="submit" className="primary-btn">
                <span>Send Message</span>
                <span className="arrow">
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

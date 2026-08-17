import { useState } from 'react'
import { z } from 'zod'
import { cn } from '@free-react-templates/ui'
import { CONTACT } from '../data'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(2, 'Please enter a subject.'),
  message: z.string().min(10, 'Your message should be at least 10 characters.'),
})

type ContactValues = z.infer<typeof contactSchema>

type FieldKey = keyof ContactValues

const INITIAL_VALUES: ContactValues = { name: '', email: '', subject: '', message: '' }

const FIELD_LABELS: Record<FieldKey, string> = {
  name: CONTACT.nameLabel,
  email: CONTACT.emailLabel,
  subject: CONTACT.subjectLabel,
  message: CONTACT.messageLabel,
}

/* "Contact" section: centered heading + lead and a white form (Name, Email,
   Subject in a three-column row, full-width message textarea, brand-blue
   submit). Fields validate with zod — the submit is blocked until the form
   is valid and a confirmation message is shown afterwards. */
export function Contact() {
  const [values, setValues] = useState<ContactValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [sent, setSent] = useState(false)

  const setField = (field: FieldKey) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    setSent(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setErrors({})
    setSent(true)
    setValues(INITIAL_VALUES)
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-smoke pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-[34px] font-bold text-ink">{CONTACT.heading}</h2>
          <p className="text-lg leading-relaxed text-muted">{CONTACT.lead}</p>
        </div>

        <form noValidate onSubmit={handleSubmit} className="bg-white p-8 shadow-sm md:p-16">
          <div className="grid gap-4 md:grid-cols-3">
            {(Object.keys(FIELD_LABELS) as FieldKey[])
              .filter((field) => field !== 'message')
              .map((field) => (
                <div key={field}>
                  <label
                    htmlFor={`contact-${field}`}
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {FIELD_LABELS[field]}
                  </label>
                  <input
                    id={`contact-${field}`}
                    type={field === 'email' ? 'email' : 'text'}
                    value={values[field]}
                    onChange={(event) => setField(field)(event.target.value)}
                    aria-invalid={errors[field] ? true : undefined}
                    aria-describedby={errors[field] ? `contact-${field}-error` : undefined}
                    placeholder={FIELD_LABELS[field]}
                    className={cn(
                      'w-full rounded border border-black/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/25',
                      errors[field] && 'border-red-500',
                    )}
                  />
                  {errors[field] && (
                    <p
                      id={`contact-${field}-error`}
                      role="alert"
                      className="mt-1.5 text-sm text-red-600"
                    >
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-sm font-semibold text-ink"
            >
              {FIELD_LABELS.message}
            </label>
            <textarea
              id="contact-message"
              value={values.message}
              onChange={(event) => setField('message')(event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              placeholder={FIELD_LABELS.message}
              rows={8}
              className={cn(
                'w-full rounded border border-black/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/25',
                errors.message && 'border-red-500',
              )}
            />
            {errors.message && (
              <p id="contact-message-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3 text-xs font-bold uppercase tracking-[.1rem] text-white transition-colors hover:bg-brand-dark"
            >
              {CONTACT.submitLabel}
            </button>
            {sent && (
              <p role="status" className="text-sm font-medium text-brand-dark">
                {CONTACT.successMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

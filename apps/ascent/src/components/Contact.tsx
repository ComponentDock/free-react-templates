import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { contactDefaults } from '../data'
import { contactSchema, fieldErrors, type ContactValues } from '../lib/forms'

const initialValues: ContactValues = { ...contactDefaults }

export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  function updateField(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thanks ${result.data.name}! Your message has been sent. We will get back to you soon.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-brand">Contact</span>
          <h2 className="mt-3 font-display text-4xl font-normal text-ink">Get in Touch</h2>
          <p className="mt-4 text-muted">
            Tour function information without cross action media value quickly maximize timely
            deliverables.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your Name"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                className="w-full border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-brand-dark" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                className="w-full border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-brand-dark" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="contact-subject" className="sr-only">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="Subject"
              value={values.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              aria-invalid={errors.subject ? true : undefined}
              className="w-full border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-brand-dark" role="alert">
                {errors.subject}
              </p>
            )}
          </div>
          <div className="mt-6">
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Message"
              rows={5}
              value={values.message}
              onChange={(event) => updateField('message', event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              className="w-full resize-none border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-brand-dark" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <div className="mt-10 text-center">
            <Button
              type="submit"
              className="bg-brand px-10 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </Button>
          </div>
          {confirmation && (
            <p className="mt-8 text-center text-base text-brand-dark" role="status">
              {confirmation}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

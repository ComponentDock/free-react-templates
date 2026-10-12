import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

export type FormErrors = Partial<Record<keyof FormValues, string>>

const EMPTY: FormValues = { name: '', email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FIELD_CLASS =
  'w-full rounded-none border border-line bg-surface p-[15px] text-[12px] text-ink outline-none placeholder:text-copy focus-visible:border-brand'

/** Field-level validation for the contact form (kept pure for unit testing). */
export function validateContact(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (values.name.trim() === '') {
    errors.name = 'Enter your name.'
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid e-mail address.'
  }
  if (values.subject.trim() === '') {
    errors.subject = 'Enter a subject.'
  }
  if (values.message.trim() === '') {
    errors.message = 'Tell us a little about the project.'
  }
  return errors
}

/**
 * The two-column contact form: three square-cornered fields beside a 180 px
 * textarea and an azure pill submit with a trailing arrow. Validation runs
 * locally — invalid fields get inline messages and a valid submit confirms
 * through a polite live region without ever leaving the page.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState('')

  function update(field: keyof FormValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('Please fix the highlighted fields and try again.')
      return
    }
    setStatus(`Thanks ${values.name.trim()} — your message is on its way.`)
  }

  return (
    <section id="contact" className="scroll-mt-[108px] bg-surface py-[120px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto max-w-[700px] pb-[30px] text-center">
          <h1 className="font-heading text-[36px] font-semibold text-ink">Get in Touch</h1>
          <p className="text-copy">Tell us what you are building and we will reply the same day.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-[60px] flex flex-col gap-6 lg:flex-row"
        >
          <div className="flex flex-col gap-4 lg:w-6/12">
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-[12px] text-ink">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                aria-invalid={errors.name !== undefined}
                aria-describedby={errors.name === undefined ? undefined : 'contact-name-error'}
                className={FIELD_CLASS}
              />
              {errors.name === undefined ? null : (
                <p id="contact-name-error" className="mt-1 text-[12px] text-[#f44a40]">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1 block text-[12px] text-ink">
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={errors.email !== undefined}
                aria-describedby={errors.email === undefined ? undefined : 'contact-email-error'}
                className={FIELD_CLASS}
              />
              {errors.email === undefined ? null : (
                <p id="contact-email-error" className="mt-1 text-[12px] text-[#f44a40]">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-1 block text-[12px] text-ink">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                value={values.subject}
                onChange={(event) => update('subject', event.target.value)}
                aria-invalid={errors.subject !== undefined}
                aria-describedby={
                  errors.subject === undefined ? undefined : 'contact-subject-error'
                }
                className={FIELD_CLASS}
              />
              {errors.subject === undefined ? null : (
                <p id="contact-subject-error" className="mt-1 text-[12px] text-[#f44a40]">
                  {errors.subject}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:w-6/12">
            <label htmlFor="contact-message" className="mb-1 block text-[12px] text-ink">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Describe the project, the stack and any deadlines."
              value={values.message}
              onChange={(event) => update('message', event.target.value)}
              aria-invalid={errors.message !== undefined}
              aria-describedby={errors.message === undefined ? undefined : 'contact-message-error'}
              className={cn(FIELD_CLASS, 'h-[180px] resize-none')}
            />
            {errors.message === undefined ? null : (
              <p id="contact-message-error" className="mt-1 text-[12px] text-[#f44a40]">
                {errors.message}
              </p>
            )}

            <Button
              type="submit"
              className="mt-5 inline-flex h-[42px] items-center gap-2 self-start rounded-[25px] border-none bg-brand px-[30px] text-[12px] font-medium text-white uppercase transition-colors hover:bg-brand-deep"
            >
              Send Message
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <p role="status" aria-live="polite" className="mt-3 min-h-6 text-[12px] text-brand">
              {status}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { contact } from '../data'
import { hasErrors, validateContact, type ContactErrors, type ContactValues } from '../lib/contact'

const initialValues: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

/** White "Contact Form" section: underline-only inputs (First name + Last
 *  name side by side, Email, Subject, message textarea) and a green pill
 *  "Send Message" submit. Validates every field and shows a success message
 *  on valid submit. */
export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  const handleChange =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (!hasErrors(nextErrors)) {
      setSent(true)
    }
  }

  const fieldClass =
    'w-full border-0 border-b border-line bg-transparent pb-2 font-sans text-ink outline-none transition-colors focus:border-ink'

  return (
    <section id="contact-section" data-testid="contact" className="bg-white py-[2.5em] md:py-[7em]">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="section-title relative mb-5 pb-5 text-center text-3xl">{contact.heading}</h2>

        {sent ? (
          <p role="status" className="mt-10 text-center text-body">
            Thanks for your message — we will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="vitae-first-name" className="sr-only">
                  {contact.firstName}
                </label>
                <input
                  id="vitae-first-name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  placeholder={contact.firstName}
                  className={fieldClass}
                />
                {errors.firstName && (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="vitae-last-name" className="sr-only">
                  {contact.lastName}
                </label>
                <input
                  id="vitae-last-name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  placeholder={contact.lastName}
                  className={fieldClass}
                />
                {errors.lastName && (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="vitae-email" className="sr-only">
                {contact.email}
              </label>
              <input
                id="vitae-email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                placeholder={contact.email}
                className={fieldClass}
              />
              {errors.email && (
                <p role="alert" className="mt-2 text-sm text-brand">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="vitae-subject" className="sr-only">
                {contact.subject}
              </label>
              <input
                id="vitae-subject"
                type="text"
                value={values.subject}
                onChange={handleChange('subject')}
                placeholder={contact.subject}
                className={fieldClass}
              />
              {errors.subject && (
                <p role="alert" className="mt-2 text-sm text-brand">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="vitae-message" className="sr-only">
                {contact.message}
              </label>
              <textarea
                id="vitae-message"
                rows={10}
                value={values.message}
                onChange={handleChange('message')}
                placeholder={contact.message}
                className={fieldClass}
              />
              {errors.message && (
                <p role="alert" className="mt-2 text-sm text-brand">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="mt-8 rounded-full px-[30px] py-[10px] text-base"
            >
              {contact.submit}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { contact } from '../data'
import { contactSchema, fieldErrors, initialContact, type ContactValues } from '../lib/forms'

const INPUT_FIELDS = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
] as const

/* Contact section (reference `#contact-section`): a #f6f6f6 band with the
   centered title and a white form card — labeled square-cornered inputs, a
   message textarea and a teal pill Send Message submit. Zod-validated with
   per-field errors; on success the whole form swaps to a confirmation (the
   inputs unmount). */
export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialContact)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (name: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="contact-section" aria-label="Contact" className="bg-light py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-[30px] font-black text-ink lg:text-[40px]">
          {contact.heading}
        </h2>

        <div className="mx-auto mt-12 max-w-3xl">
          {submitted ? (
            <div className="bg-paper p-[3rem]">
              <p role="status" className="text-center text-lg text-ink">
                {contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="bg-paper p-[3rem]">
              <h3 className="mb-8 font-heading text-xl font-black text-ink">
                {contact.cardHeading}
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {INPUT_FIELDS.map((field) => (
                  <div
                    key={field.name}
                    className={
                      field.name === 'email' || field.name === 'subject'
                        ? 'md:col-span-2'
                        : undefined
                    }
                  >
                    <label
                      htmlFor={`contact-${field.name}`}
                      className="mb-2 block font-heading text-sm text-ink"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      type={field.type}
                      value={values[field.name]}
                      onChange={(event) => update(field.name, event.target.value)}
                      aria-invalid={errors[field.name] ? true : undefined}
                      aria-describedby={
                        errors[field.name] ? `contact-${field.name}-error` : undefined
                      }
                      className="h-[43px] w-full rounded-none border border-border bg-paper px-4 text-ink outline-none focus:border-brand"
                    />
                    {errors[field.name] ? (
                      <p
                        id={`contact-${field.name}-error`}
                        role="alert"
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors[field.name]}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-heading text-sm text-ink"
                >
                  {contact.fields.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={7}
                  value={values.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder={contact.messagePlaceholder}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className="w-full rounded-none border border-border bg-paper px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-brand"
                />
                {errors.message ? (
                  <p id="contact-message-error" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-6 rounded-full border-2 border-brand bg-brand px-[30px] py-3 text-base font-medium text-white shadow-[0_4px_20px_-5px_rgba(0,210,181,0.4)] transition-colors hover:bg-transparent hover:text-ink"
              >
                {contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { contact } from '../data'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const emptyValues: FormValues = { firstName: '', lastName: '', email: '', message: '' }

const fields: { name: keyof FormValues; label: string; type: string }[] = [
  { name: 'firstName', label: 'First name', type: 'text' },
  { name: 'lastName', label: 'Last name', type: 'text' },
  { name: 'email', label: 'Email address', type: 'email' },
]

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (values.firstName.trim() === '') {
    errors.firstName = 'Tell us your first name.'
  }
  if (values.lastName.trim() === '') {
    errors.lastName = 'Tell us your last name.'
  }
  if (values.email.trim() === '') {
    errors.email = 'Tell us where we should reply.'
  } else if (!values.email.includes('@')) {
    errors.email = 'Use an e-mail address we can reply to.'
  }
  if (values.message.trim() === '') {
    errors.message = 'Add a short description of the shipment.'
  }
  return errors
}

/** Eight-of-twelve contact form: 55px fields, a 10-row message box and a full-width blue submit. */
export function Contact() {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = fields.find((field) => nextErrors[field.name])
    const messageInvalid = nextErrors.message !== undefined

    if (firstInvalid || messageInvalid) {
      setStatus('')
      const target = firstInvalid?.name ?? 'message'
      document.getElementById(target)?.focus()
      return
    }

    setStatus('Thanks — the desk has your message and replies the same day.')
    setValues(emptyValues)
  }

  return (
    <section id="contact" aria-label="Contact us" className="bg-surface py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            {contact.heading}
          </h2>
          <p className="mt-4 text-[16px] text-body">{contact.blurb}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto grid max-w-[760px] gap-4 md:grid-cols-2"
        >
          {fields.map((field) => {
            const error = errors[field.name]
            return (
              <div key={field.name} className={field.type === 'email' ? 'md:col-span-2' : undefined}>
                <label htmlFor={field.name} className="sr-only">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={values[field.name]}
                  placeholder={field.label}
                  aria-invalid={error === undefined ? undefined : true}
                  aria-describedby={error === undefined ? undefined : `${field.name}-error`}
                  onChange={(event) => {
                    const { name, value } = event.target
                    setValues((current) => ({ ...current, [name]: value }))
                  }}
                  className="h-[55px] w-full rounded-[4px] border border-field bg-white px-5 text-[16px] text-ink focus:border-brand focus:outline-none"
                />
                {error === undefined ? null : (
                  <p id={`${field.name}-error`} className="mt-1 text-[14px] text-secondary">
                    {error}
                  </p>
                )}
              </div>
            )
          })}

          <div className="md:col-span-2">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={10}
              value={values.message}
              placeholder="Write your message."
              aria-invalid={errors.message === undefined ? undefined : true}
              aria-describedby={errors.message === undefined ? undefined : 'message-error'}
              onChange={(event) => {
                const { name, value } = event.target
                setValues((current) => ({ ...current, [name]: value }))
              }}
              className="w-full rounded-[4px] border border-field bg-white px-5 py-3 text-[16px] text-ink focus:border-brand focus:outline-none"
            />
            {errors.message === undefined ? null : (
              <p id="message-error" className="mt-1 text-[14px] text-secondary">
                {errors.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-[4px] bg-brand px-12 py-4 text-[16px] font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </button>
          </div>

          <p role="status" aria-live="polite" className="text-[16px] text-body md:col-span-2">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}

import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { contact } from '../content'
import { cn } from '@free-react-templates/ui'
import { containerClass, sectionClass } from './ui'

export interface EnquiryValues {
  name: string
  email: string
  subject: string
  message: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>

export const EMPTY_ENQUIRY: EnquiryValues = { name: '', email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Four fields, four messages, and every one of them names the field. */
export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {}
  if (values.name.trim().length === 0) {
    errors.name = contact.errors.name
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = contact.errors.email
  }
  if (values.subject.trim().length === 0) {
    errors.subject = contact.errors.subject
  }
  if (values.message.trim().length === 0) {
    errors.message = contact.errors.message
  }
  return errors
}

const FIELD_CLASS =
  'mt-1.5 block w-full rounded-lg border bg-ink-900 px-4 py-3 text-base leading-6 text-ink-50 placeholder:text-ink-300 focus:ring-2 focus:ring-primary-500/30 focus:outline-none'

const LABEL_CLASS = 'block text-sm leading-5 font-semibold text-ink-100'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label className={LABEL_CLASS} htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm leading-5 font-semibold text-primary-300">
          {error}
        </p>
      ) : null}
    </div>
  )
}

/**
 * The closing band. The reference's enquiry form lives on an inner route; a
 * single-page template with four dead CTAs would be a broken artefact, so the
 * form is merged here with client-side validation and a visible success state.
 */
export function Contact() {
  const [values, setValues] = useState<EnquiryValues>(EMPTY_ENQUIRY)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof EnquiryValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      return
    }
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className={`bg-ink-800 ${sectionClass}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="contact-heading" className="font-serif text-3xl leading-10 font-normal text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-ink-200">{contact.lead}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#enquiry"
              className="inline-flex w-full items-center justify-center rounded-lg border border-primary-500 px-8 py-4 text-xs leading-4 font-semibold tracking-[0.18em] text-primary-400 uppercase transition-colors hover:bg-primary-500 hover:text-ink-900 sm:w-auto"
            >
              {contact.primary}
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-8 py-4 text-xs leading-4 font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:border-white sm:w-auto"
            >
              {contact.secondary}
            </a>
          </div>
        </div>

        <div id="enquiry" className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-sm leading-5 font-semibold tracking-[0.18em] text-ink-100 uppercase">
            {contact.formHeading}
          </h3>

          {sent ? (
            <div data-testid="enquiry-sent" role="status" className="mt-6 rounded-2xl bg-ink-900 p-8">
              <p className="text-lg leading-7 font-semibold text-white">
                {contact.success.title}
              </p>
              <p className="mt-2 text-base leading-6 text-ink-200">{contact.success.body}</p>
              <button
                type="button"
                onClick={() => {
                  setValues(EMPTY_ENQUIRY)
                  setErrors({})
                  setSent(false)
                }}
                className="mt-6 border-b border-primary-500 pb-1 text-xs font-semibold tracking-[0.18em] text-primary-400 uppercase"
              >
                {contact.success.reset}
              </button>
            </div>
          ) : (
            <form className="mt-6 space-y-5" onSubmit={submit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="enquiry-name" label={contact.fields.name} error={errors.name}>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={contact.placeholders.name}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                    value={values.name}
                    onChange={(event) => update('name', event.target.value)}
                    className={cn(FIELD_CLASS, errors.name ? 'border-primary-400' : 'border-ink-500')}
                  />
                </Field>
                <Field id="enquiry-email" label={contact.fields.email} error={errors.email}>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={contact.placeholders.email}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                    value={values.email}
                    onChange={(event) => update('email', event.target.value)}
                    className={cn(FIELD_CLASS, errors.email ? 'border-primary-400' : 'border-ink-500')}
                  />
                </Field>
              </div>

              <Field id="enquiry-subject" label={contact.fields.subject} error={errors.subject}>
                <input
                  id="enquiry-subject"
                  name="subject"
                  type="text"
                  placeholder={contact.placeholders.subject}
                  aria-invalid={errors.subject ? true : undefined}
                  aria-describedby={errors.subject ? 'enquiry-subject-error' : undefined}
                  value={values.subject}
                  onChange={(event) => update('subject', event.target.value)}
                  className={cn(FIELD_CLASS, errors.subject ? 'border-primary-400' : 'border-ink-500')}
                />
              </Field>

              <Field id="enquiry-message" label={contact.fields.message} error={errors.message}>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  placeholder={contact.placeholders.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                  value={values.message}
                  onChange={(event) => update('message', event.target.value)}
                  className={cn(FIELD_CLASS, errors.message ? 'border-primary-400' : 'border-ink-500')}
                />
              </Field>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-sm leading-5 font-bold text-white transition-colors hover:bg-primary-700 sm:w-auto"
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

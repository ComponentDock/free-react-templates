import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact } from '../content'
import { validateEnquiry } from '../lib/forms'
import type { EnquiryErrors, EnquiryValues } from '../lib/forms'
import { ActionLink } from './ui'

const EMPTY: EnquiryValues = { name: '', email: '', subject: '', message: '' }

const FIELD_CLASS =
  'mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'

/**
 * The reference keeps its enquiry form on `/contact`; a one-page template whose
 * primary CTA goes nowhere useful is a broken artefact, so the band gains the
 * four fields beneath its copy. Nothing is posted anywhere: validation and the
 * confirmation are local.
 */
export function Contact() {
  const [values, setValues] = useState<EnquiryValues>(EMPTY)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof EnquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(EMPTY)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-10 font-bold text-balance text-white sm:text-4xl lg:text-5xl lg:leading-[48px]">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-primary-100">{contact.lead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ActionLink href={contact.primaryCta.href} variant="onDark">
              {contact.primaryCta.label}
            </ActionLink>
            <ActionLink href={contact.secondaryCta.href} variant="onDarkOutline">
              {contact.secondaryCta.label}
            </ActionLink>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="mx-auto mt-12 max-w-xl text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="enquiry-name" className="block text-sm font-medium text-primary-100">
                {contact.fields.name}
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                className={FIELD_CLASS}
              />
              {errors.name ? (
                <p id="enquiry-name-error" className="mt-1 text-xs text-accent-400">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="enquiry-email" className="block text-sm font-medium text-primary-100">
                {contact.fields.email}
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                className={FIELD_CLASS}
              />
              {errors.email ? (
                <p id="enquiry-email-error" className="mt-1 text-xs text-accent-400">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="enquiry-subject" className="block text-sm font-medium text-primary-100">
              {contact.fields.subject}
            </label>
            <input
              id="enquiry-subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={(event) => update('subject', event.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="enquiry-message" className="block text-sm font-medium text-primary-100">
              {contact.fields.message}
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => update('message', event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
              className={FIELD_CLASS}
            />
            {errors.message ? (
              <p id="enquiry-message-error" className="mt-1 text-xs text-accent-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-medium text-primary-700 shadow-lg transition-shadow hover:shadow-xl"
            >
              {contact.submit}
            </button>
            {sent ? (
              <p role="status" className="text-sm leading-6 text-accent-400">
                {contact.success}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}

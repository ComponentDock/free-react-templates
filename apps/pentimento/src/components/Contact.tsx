import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { contact } from '../content'
import { validateEnquiry } from '../lib/forms'
import type { EnquiryErrors, EnquiryValues } from '../lib/forms'
import { ActionLink, containerClass, Reveal } from './ui'

const FIELD_CLASS =
  'mt-2 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-base leading-6 text-white placeholder:text-primary-200/80 focus:border-white focus:outline-none'

const EMPTY: EnquiryValues = { name: '', email: '', subject: '', message: '' }

/**
 * The reference keeps its only real form on an inner route, which a one-page
 * template cannot reach — so it lives here, with the same four fields, no
 * network call, and a confirmation in the studio's own voice.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(EMPTY)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [sent, setSent] = useState(false)

  const change =
    (field: keyof EnquiryValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setValues((current) => ({ ...current, [field]: value }))
    }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    setSent(Object.keys(found).length === 0)
  }

  return (
    <form
      id="contact-form"
      noValidate
      onSubmit={submit}
      className="mt-12 space-y-5 text-left"
      aria-label="Send an enquiry"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="text-sm leading-5 font-medium text-primary-100">
            {contact.form.name.label}
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={change('name')}
            placeholder={contact.form.name.placeholder}
            aria-invalid={errors.name ? 'true' : undefined}
            className={FIELD_CLASS}
          />
          {errors.name ? (
            <p role="alert" className="mt-2 text-sm leading-5 text-accent-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enquiry-email" className="text-sm leading-5 font-medium text-primary-100">
            {contact.form.email.label}
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={change('email')}
            placeholder={contact.form.email.placeholder}
            aria-invalid={errors.email ? 'true' : undefined}
            className={FIELD_CLASS}
          />
          {errors.email ? (
            <p role="alert" className="mt-2 text-sm leading-5 text-accent-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-subject" className="text-sm leading-5 font-medium text-primary-100">
          {contact.form.subject.label}
        </label>
        <input
          id="enquiry-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={change('subject')}
          placeholder={contact.form.subject.placeholder}
          className={FIELD_CLASS}
        />
      </div>

      <div>
        <label htmlFor="enquiry-message" className="text-sm leading-5 font-medium text-primary-100">
          {contact.form.message.label}
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={change('message')}
          placeholder={contact.form.message.placeholder}
          aria-invalid={errors.message ? 'true' : undefined}
          className={FIELD_CLASS}
        />
        {errors.message ? (
          <p role="alert" className="mt-2 text-sm leading-5 text-accent-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm leading-5 font-medium text-primary-700 transition-colors hover:bg-primary-50"
      >
        {contact.form.submit}
      </button>

      {sent ? (
        <p role="status" className="text-sm leading-6 text-primary-100">
          {contact.form.success}
        </p>
      ) : null}
    </form>
  )
}

/** The page's only saturated surface: a 135° stone gradient with a dot grid. */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className={`${containerClass} relative z-10`}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl leading-10 font-bold tracking-[-1.2px] text-white sm:text-4xl lg:text-5xl lg:leading-[48px]">
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-primary-100">
              {contact.lead}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ActionLink href={contact.primaryCta.href} variant="onDark">
                {contact.primaryCta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ActionLink>
              <ActionLink href={contact.secondaryCta.href} variant="onDarkOutline">
                {contact.secondaryCta.label}
              </ActionLink>
            </div>
          </Reveal>

          <div className="mx-auto max-w-xl">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}

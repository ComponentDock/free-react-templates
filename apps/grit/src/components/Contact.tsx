import { useState, type FormEvent } from 'react'
import {
  contactEmailLabel,
  contactEyebrow,
  contactFirstNameLabel,
  contactLastNameLabel,
  contactLead,
  contactMessageLabel,
  contactSubjectLabel,
  contactSubmitLabel,
  contactSuccessMessage,
  contactTitle,
} from '../data'
import { cn } from '@free-react-templates/ui'

const inputClasses =
  'h-[50px] w-full rounded-none border-2 border-gray-300 bg-transparent px-4 text-sm text-ink transition-colors focus:border-brand focus:outline-none'
const textareaClasses =
  'w-full rounded-none border-2 border-gray-300 bg-transparent px-4 py-3 text-sm text-ink transition-colors focus:border-brand focus:outline-none'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Native `required`/`type="email"` constraint validation blocks invalid
    // submits before this handler runs (jsdom implements this too), so a
    // submit that reaches us is always valid.
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section aria-label={contactTitle} className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {contactEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-[2.5rem]">{contactTitle}</h2>
          <p className="mt-4 text-muted">{contactLead}</p>
        </div>

        {submitted ? (
          <p
            role="status"
            className="mt-12 border-2 border-brand bg-white p-8 text-center text-lg font-bold text-brand"
          >
            {contactSuccessMessage}
          </p>
        ) : (
          <form className="mt-12 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  {contactFirstNameLabel}
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  placeholder={contactFirstNameLabel}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  {contactLastNameLabel}
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  placeholder={contactLastNameLabel}
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                {contactSubjectLabel}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder={contactSubjectLabel}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                {contactEmailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={contactEmailLabel}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                {contactMessageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                placeholder={contactMessageLabel}
                className={textareaClasses}
              />
            </div>
            <div className={cn('md:col-span-2')}>
              <button
                type="submit"
                className="w-full bg-brand px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-2 md:w-auto"
              >
                {contactSubmitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

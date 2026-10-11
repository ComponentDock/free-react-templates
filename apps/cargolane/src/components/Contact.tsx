import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CONTACT_CARDS } from '../data/content'
import { contactSchema, fieldErrors, type ContactValues } from '../lib/forms'
import { SectionHeading } from './SectionHeading'

const EMPTY: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

export function Contact() {
  const [values, setValues] = useState<ContactValues>(EMPTY)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const update =
    (key: keyof ContactValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [key]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors<keyof ContactValues>(result.error))
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Contact Us"
          align="center"
          tone="primary"
          blurb="Questions about a shipment? Our team replies within one business day."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            {submitted ? (
              <div className="bg-white p-8 text-center">
                <p className="text-lg text-black">Thanks! Your message has been received.</p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(EMPTY)
                    setSubmitted(false)
                  }}
                  className="mt-6 rounded-none bg-primary px-8 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-primary/90"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-black">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      value={values.firstName}
                      onChange={update('firstName')}
                      className="mt-1 h-[43px] w-full rounded-none border border-black/20 bg-white px-3 focus:border-primary focus:outline-none"
                    />
                    {errors.firstName ? (
                      <p role="alert" className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-black">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      value={values.lastName}
                      onChange={update('lastName')}
                      className="mt-1 h-[43px] w-full rounded-none border border-black/20 bg-white px-3 focus:border-primary focus:outline-none"
                    />
                    {errors.lastName ? (
                      <p role="alert" className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm text-black">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    className="mt-1 h-[43px] w-full rounded-none border border-black/20 bg-white px-3 focus:border-primary focus:outline-none"
                  />
                  {errors.email ? (
                    <p role="alert" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4">
                  <label htmlFor="subject" className="block text-sm text-black">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={values.subject}
                    onChange={update('subject')}
                    className="mt-1 h-[43px] w-full rounded-none border border-black/20 bg-white px-3 focus:border-primary focus:outline-none"
                  />
                  {errors.subject ? (
                    <p role="alert" className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={update('message')}
                    className="mt-1 w-full rounded-none border border-black/20 bg-white px-3 py-2 focus:border-primary focus:outline-none"
                  />
                  {errors.message ? (
                    <p role="alert" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="mt-6 rounded-none bg-primary px-10 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="space-y-4">
            {CONTACT_CARDS.map((card) => (
              <div key={card.label} className="bg-white p-4">
                <h3 className="text-sm uppercase tracking-[0.1em] text-primary">{card.label}</h3>
                <p className="mt-1 text-black">{card.value}</p>
              </div>
            ))}
            <div className="bg-white p-4">
              <h3 className="text-sm uppercase tracking-[0.1em] text-primary">More Info</h3>
              <p className="mt-1">
                Need a custom lane, warehousing, or a same-day quote? Our specialists are ready to
                help.
              </p>
              <a
                href="#services"
                className="mt-2 inline-block text-sm uppercase tracking-[0.2em] text-primary hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

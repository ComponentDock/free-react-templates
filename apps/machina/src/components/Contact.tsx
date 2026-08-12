import { useState, type FormEvent } from 'react'
import { Mail, Phone, User } from 'lucide-react'
import { z } from 'zod'
import { ENQUIRY_TEXT, ENQUIRY_TITLE, FORM_TITLE, TOPIC_OPTIONS } from '../data'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[+\d][\d\s()-]{6,}$/, 'Please enter a valid phone number'),
  topic: z.string().min(1, 'Please select a topic'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters'),
})

type ContactValues = z.infer<typeof contactSchema>

type FieldKey = keyof ContactValues

const initialValues: ContactValues = {
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
}

/**
 * Contact — enquiry card + validated message form (source
 * `div.contact-form.testimonial-area`): the "Need to make an enquiry?" card
 * sits beside a "Drop your message" form with Your Name / Email / Phone no.
 * / Topic select / Message and a red "Send Message" submit button.
 */
export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        topic: fieldErrors.topic?.[0],
        message: fieldErrors.message?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(`Thanks ${result.data.name}! We'll get back to you within 48 hours.`)
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="contact" className="bg-lilac py-24" aria-label="Contact">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col justify-center bg-white p-10 shadow-sm">
          <h3 className="font-display text-2xl font-bold text-ink">{ENQUIRY_TITLE}</h3>
          <p className="mt-4 leading-relaxed text-body">{ENQUIRY_TEXT}</p>
          <ul className="mt-8 space-y-3 text-sm text-body">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              +880 278 367 367
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              brexitsupport@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{FORM_TITLE}</h2>
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink"
              >
                Your Name
              </label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-mist"
                  aria-hidden="true"
                />
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className="h-12 w-full border border-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition-shadow placeholder:text-mist focus:border-brand"
                />
              </div>
              {errors.name ? (
                <p className="mt-1 text-xs font-semibold text-brand">{errors.name}</p>
              ) : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className="h-12 w-full border border-line bg-white px-4 text-sm text-ink outline-none transition-shadow placeholder:text-mist focus:border-brand"
                />
                {errors.email ? (
                  <p className="mt-1 text-xs font-semibold text-brand">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink"
                >
                  Phone no.
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  className="h-12 w-full border border-line bg-white px-4 text-sm text-ink outline-none transition-shadow placeholder:text-mist focus:border-brand"
                />
                {errors.phone ? (
                  <p className="mt-1 text-xs font-semibold text-brand">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink"
              >
                Topic
              </label>
              <select
                id="contact-topic"
                value={values.topic}
                onChange={(event) => handleChange('topic', event.target.value)}
                aria-invalid={Boolean(errors.topic)}
                className="h-12 w-full border border-line bg-white px-4 text-sm text-ink outline-none focus:border-brand"
              >
                <option value="">Select a topic</option>
                {TOPIC_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.topic ? (
                <p className="mt-1 text-xs font-semibold text-brand">{errors.topic}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-shadow placeholder:text-mist focus:border-brand"
              />
              {errors.message ? (
                <p className="mt-1 text-xs font-semibold text-brand">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-brand px-14 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
          {confirmation ? (
            <p
              role="status"
              className="mt-6 border border-brand/30 bg-soft px-4 py-3 text-sm font-semibold text-ink"
            >
              {confirmation}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

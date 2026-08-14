import { useState, type FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { z } from 'zod'
import { CONTACT, emailHref, phoneHref } from '../data'
import { Button } from '@free-react-templates/ui'

const contactSchema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().min(1, 'Your email is required').email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactValues = z.infer<typeof contactSchema>

const initialValues: ContactValues = { name: '', email: '', subject: '', message: '' }

const INFO_ITEMS: {
  label: string
  value: string
  Icon: LucideIcon
  href?: string
}[] = [
  { label: 'Address', value: CONTACT.address, Icon: MapPin },
  { label: 'Contact Number', value: CONTACT.phone, Icon: Phone, href: phoneHref(CONTACT.phone) },
  { label: 'Email Address', value: CONTACT.email, Icon: Mail, href: emailHref(CONTACT.email) },
  { label: 'Website', value: CONTACT.website, Icon: Globe },
]

/* Contact — "Contact Me" heading, four info items and a validated
   message form (name, email, subject, message) with a client-side
   success message (no backend). */
export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactValues, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactValues
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message
        }
      }
      setErrors(fieldErrors)
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  function update(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const inputClasses =
    'w-full rounded-full border border-gray-200 px-5 py-3 text-black outline-none transition-colors placeholder:text-black/40 focus:border-brand'

  return (
    <section id="contact-section" aria-label="Contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">Contact</span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Contact Me</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ul className="flex flex-col gap-7">
            {INFO_ITEMS.map(({ label, value, Icon, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-black">{label}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-black/60 transition-colors hover:text-brand"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-black/60">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-black">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  className={inputClasses}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-black">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  className={inputClasses}
                  placeholder="Your Email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1 block text-sm font-bold text-black">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={values.subject}
                onChange={(event) => update('subject', event.target.value)}
                aria-invalid={errors.subject ? true : undefined}
                className={inputClasses}
                placeholder="Subject"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-black">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(event) => update('message', event.target.value)}
                aria-invalid={errors.message ? true : undefined}
                className="w-full rounded-3xl border border-gray-200 px-5 py-3 text-black outline-none transition-colors placeholder:text-black/40 focus:border-brand"
                placeholder="Message"
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              className="self-start rounded-full bg-brand px-8 py-3 text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </Button>
            {sent && (
              <p role="status" className="text-sm text-green-600">
                Thanks! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

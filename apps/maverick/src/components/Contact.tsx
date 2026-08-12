import { useState, type FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { CONTACT } from '../data'
import { contactSchema, fieldErrors, initialContact, type ContactValues } from '../lib/forms'

/* Contact section recreated from the ColorLib "Clark" contact: four info
   boxes (Address, Contact Number, Email Address, Website) with 100px
   circular icons, then a two-column block with the white contact form
   (name / email / subject / message, amber pill "Send Message") on one
   side and a photo on the other. The form validates client-side with zod
   and swaps to a success message on submit (no backend). */

type BoxIcon = (typeof CONTACT.boxes)[number]['icon']

const boxIcons: Record<BoxIcon, LucideIcon> = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  website: Globe,
}

export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialContact)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof ContactValues) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
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
    <section id="contact-section" className="bg-black py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            {CONTACT.subheading}
          </p>
          <h2 className="text-[50px] font-bold text-white">{CONTACT.heading}</h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] text-muted">{CONTACT.blurb}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT.boxes.map((box) => {
            const Icon = boxIcons[box.icon]
            return (
              <div key={box.title} className="rounded-[4px] bg-black text-center">
                <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-card">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-white">{box.title}</h3>
                <p className="mt-2 text-[16px] text-faint">{box.value}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <img
            src={CONTACT.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-[420px] w-full max-w-[520px] object-cover"
          />
          <div className="rounded-[5px] bg-white p-8">
            {submitted ? (
              <p role="status" className="text-[18px] font-semibold text-black">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your Name"
                      value={values.name}
                      onChange={(event) => update('name')(event.target.value)}
                      className="h-[52px] w-full rounded-[5px] border border-gray-200 bg-white px-4 text-[16px] text-black placeholder-gray-400 focus:border-black focus:outline-none"
                    />
                    {errors.name ? (
                      <p role="alert" className="mt-1 text-[13px] text-red-600">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={(event) => update('email')(event.target.value)}
                      className="h-[52px] w-full rounded-[5px] border border-gray-200 bg-white px-4 text-[16px] text-black placeholder-gray-400 focus:border-black focus:outline-none"
                    />
                    {errors.email ? (
                      <p role="alert" className="mt-1 text-[13px] text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={(event) => update('subject')(event.target.value)}
                    className="h-[52px] w-full rounded-[5px] border border-gray-200 bg-white px-4 text-[16px] text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  />
                  {errors.subject ? (
                    <p role="alert" className="mt-1 text-[13px] text-red-600">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={7}
                    placeholder="Message"
                    value={values.message}
                    onChange={(event) => update('message')(event.target.value)}
                    className="w-full rounded-[5px] border border-gray-200 bg-white px-4 py-3 text-[16px] text-black placeholder-gray-400 focus:border-black focus:outline-none"
                  />
                  {errors.message ? (
                    <p role="alert" className="mt-1 text-[13px] text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center rounded-[40px] bg-brand px-6 py-3 text-[16px] font-semibold text-black transition-colors hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

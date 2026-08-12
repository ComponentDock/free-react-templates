import { useState, type FormEvent } from 'react'
import { CheckCircle2, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { z } from 'zod'
import { CONTACT_INFO, PILL } from '../data'

const contactSchema = z.object({
  firstName: z.string().min(1, 'Your name is required'),
  lastName: z.string().min(1, 'Your last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Your phone number is required'),
  message: z.string().min(1, 'Please write a message'),
})

type ContactValues = z.infer<typeof contactSchema>
type FieldErrors = Partial<Record<keyof ContactValues, string>>

const initialValues: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
}

const ICONS = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
  globe: Globe,
} as const

const FIELDS = [
  { key: 'firstName', label: 'Your Name', type: 'text' },
  { key: 'lastName', label: 'Last Name', type: 'text' },
  { key: 'email', label: 'E-mail', type: 'email' },
  { key: 'phone', label: 'Your Number', type: 'text' },
] as const

/* Contact recreated from the source's contact area: contact information
   rows beside an underline-style message form (2×2 inputs + textarea) that
   validates with zod and swaps to a success state once sent. */

export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const setField = (key: keyof ContactValues) => (value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy pb-[100px] pt-[100px]">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">Have Question?</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Contact Us
          </h4>

          <div className="mt-10 space-y-6">
            {CONTACT_INFO.map((info) => {
              const Icon = ICONS[info.icon]
              return (
                <div key={info.label} className="flex items-start gap-5">
                  <Icon className="mt-1 h-6 w-6 text-brand" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted">
                      {info.label}
                    </p>
                    <h6 className="mt-1 text-lg font-medium text-white">{info.value}</h6>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-16 w-16 text-brand" aria-hidden="true" />
              <h4 className="mt-6 text-2xl font-bold uppercase tracking-wide text-white">
                Message Sent!
              </h4>
              <p className="mt-3 max-w-sm text-muted">
                Thanks for reaching out — our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {FIELDS.map((field) => (
                <div key={field.key}>
                  <input
                    aria-label={field.label}
                    type={field.type}
                    value={values[field.key]}
                    onChange={(event) => setField(field.key)(event.target.value)}
                    placeholder={field.label}
                    className="w-full border-0 border-b border-form-line bg-transparent px-0 py-2 text-[15px] text-tab-active placeholder:text-muted/60 focus:border-navy-deep focus:outline-none"
                  />
                  {errors[field.key] ? (
                    <p role="alert" className="mt-2 text-sm text-brand">
                      {errors[field.key]}
                    </p>
                  ) : null}
                </div>
              ))}
              <div className="sm:col-span-2">
                <textarea
                  aria-label="Your Message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => setField('message')(event.target.value)}
                  placeholder="Your Message *"
                  className="w-full resize-none border-0 border-b border-form-line bg-transparent px-0 py-2 text-[15px] text-tab-active placeholder:text-muted/60 focus:border-navy-deep focus:outline-none"
                />
                {errors.message ? (
                  <p role="alert" className="mt-2 text-sm text-brand">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className={PILL}>
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react'
import { z } from 'zod'
import { Button, cn } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'
import { contactInfo } from '../data'

const contactSchema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().min(1, 'Your email is required').email('Enter a valid email address'),
  subject: z.string().min(1, 'A subject is required'),
  message: z.string().min(1, 'A message is required'),
})

type ContactValues = z.infer<typeof contactSchema>
type ContactErrors = Partial<Record<keyof ContactValues, string>>

const initialValues: ContactValues = { name: '', email: '', subject: '', message: '' }

const infoIcons = {
  Address: MapPin,
  Phone: Phone,
  Email: Mail,
  Website: Globe,
} as const

const fields: ReadonlyArray<{
  name: keyof ContactValues
  label: string
  type: string
  as?: 'input' | 'textarea'
}> = [
  { name: 'name', label: 'Your Name', type: 'text' },
  { name: 'email', label: 'Your Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', type: 'text', as: 'textarea' },
]

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      // zod v4 reports every failing check per field — keep the first message.
      const flattened = result.error.flatten().fieldErrors
      setErrors(
        Object.fromEntries(
          Object.entries(flattened).map(([field, messages]) => [field, messages?.[0]]),
        ) as ContactErrors,
      )
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="contact-section" aria-label="Contact" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Contact Me" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => {
            const Icon = infoIcons[info.label as keyof typeof infoIcons]
            return (
              <div
                key={info.label}
                className="rounded-xl border border-line bg-white p-6 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-heading">{info.label}</h3>
                <p className="mt-1 text-sm text-value">{info.value}</p>
              </div>
            )
          })}
        </div>

        {submitted ? (
          <div className="mx-auto mt-12 max-w-md rounded-xl border border-line bg-surface/60 p-10 text-center">
            <p className="text-lg font-medium text-heading">Thank you!</p>
            <p className="mt-2 text-muted">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mx-auto mt-12 max-w-3xl space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={cn(field.as === 'textarea' && 'sm:col-span-2')}>
                  <label
                    htmlFor={`contact-${field.name}`}
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    {field.label}
                  </label>
                  {field.as === 'textarea' ? (
                    <textarea
                      id={`contact-${field.name}`}
                      rows={5}
                      value={values[field.name]}
                      onChange={(event) => handleChange(field.name, event.target.value)}
                      className={cn(
                        'w-full rounded-lg border border-line bg-white px-4 py-3 text-value focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30',
                        errors[field.name] && 'border-red-500',
                      )}
                    />
                  ) : (
                    <input
                      id={`contact-${field.name}`}
                      type={field.type}
                      value={values[field.name]}
                      onChange={(event) => handleChange(field.name, event.target.value)}
                      className={cn(
                        'w-full rounded-lg border border-line bg-white px-4 py-3 text-value focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30',
                        errors[field.name] && 'border-red-500',
                      )}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="mt-1.5 text-sm text-red-500">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
            <Button type="submit" className="px-10">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Headphones, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(1, 'Please enter a message'),
})

type ContactValues = z.infer<typeof contactSchema>

const initialValues: ContactValues = { name: '', email: '', subject: '', message: '' }

const columns = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: [
      '56/8, bir uttam qazi nuruzzaman road,',
      'west panthapath, kalabagan,',
      'Dhanmondi, Dhaka - 1205',
    ],
  },
  {
    icon: Phone,
    title: "Let's call us",
    lines: ['Phone 01: 012-6532-568-9746', 'Phone 02: 012-6532-568-9748', 'FAX: 02-6532'],
  },
  {
    icon: Mail,
    title: "Let's Email Us",
    lines: ['hello@example.com', 'mainhelpinfo@example.com', 'infohelp@example.com'],
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    lines: ['support@example.com', 'emergencysupp@example.com', 'extremesupp@example.com'],
  },
] as const

export function Contact() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(`Thanks, ${result.data.name}! Your message has been received.`)
    setValues(initialValues)
    setErrors({})
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

  return (
    <section
      id="contact"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-ink dark:text-white lg:text-4xl">
            If you need, Just drop us a line
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {columns.map((column) => (
              <div key={column.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white">
                  <column.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink dark:text-white">
                    {column.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                    {column.lines.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-950 lg:col-span-3 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                [
                  { key: 'name', label: 'Your name', type: 'text' },
                  { key: 'email', label: 'Email address', type: 'email' },
                  { key: 'subject', label: 'Subject', type: 'text' },
                ] as const
              ).map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`contact-${field.key}`}
                    className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`contact-${field.key}`}
                    type={field.type}
                    value={values[field.key]}
                    onChange={(event) => handleChange(field.key, event.target.value)}
                    aria-invalid={Boolean(errors[field.key])}
                    className={inputClass}
                  />
                  {errors[field.key] && (
                    <p className="mt-1 text-xs font-semibold text-red-600">{errors[field.key]}</p>
                  )}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  className={inputClass}
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" size="lg" className="rounded-[25px] uppercase">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </Button>
            </div>

            {confirmation && (
              <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                {confirmation}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { z } from 'zod'
import { CONTACT } from '../data'
import { Button } from '@free-react-templates/ui'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactValues = z.infer<typeof contactSchema>

/* Contact — form with name, email, subject, message fields + office info
   sidebar. Validates with zod, shows per-field errors, and displays a
   success message on valid submission. */
export function Contact() {
  const [values, setValues] = useState<ContactValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({})
  const [sent, setSent] = useState(false)

  function update(field: keyof ContactValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactValues, string>> = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactValues | undefined
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  return (
    <section id="contact-section" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            {CONTACT.heading}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">{CONTACT.subheading}</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-[1fr_350px]">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-ink">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  className="w-full rounded-lg border border-edge bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
                />
                {errors.name && (
                  <p id="error-name" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-ink">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  className="w-full rounded-lg border border-edge bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
                />
                {errors.email && (
                  <p id="error-email" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-ink">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={values.subject}
                onChange={(e) => update('subject', e.target.value)}
                aria-invalid={errors.subject ? true : undefined}
                aria-describedby={errors.subject ? 'error-subject' : undefined}
                className="w-full rounded-lg border border-edge bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.subject && (
                <p id="error-subject" role="alert" className="mt-1 text-xs text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? 'error-message' : undefined}
                className="w-full resize-none rounded-lg border border-edge bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.message && (
                <p id="error-message" role="alert" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Send Message
            </Button>
            {sent && (
              <p role="status" className="text-sm text-green-700">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
          <div className="space-y-8">
            {[
              {
                Icon: MapPin,
                label: 'Address',
                value: '198 West 21th Street, Suite 721 New York, NY 10016',
              },
              { Icon: Phone, label: 'Phone', value: '+1 234 567 890' },
              { Icon: Mail, label: 'Email', value: 'info@maxim.com' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-ink">{label}</p>
                  <p className="text-sm text-muted">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

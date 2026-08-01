import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Enter a valid email'),
  message: z.string().min(1, 'Message is required'),
})

type ContactForm = z.infer<typeof contactSchema>
type ContactErrors = Partial<Record<keyof ContactForm, string>>

const emptyForm: ContactForm = { name: '', email: '', message: '' }

export function Contact() {
  const [values, setValues] = useState<ContactForm>(emptyForm)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof ContactForm, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      })
      setSubmitted(false)
      return
    }
    setErrors({})
    setValues(emptyForm)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Have a project in mind? Send me a message and I&apos;ll get back to you within 24 hours.
        </p>
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={values.name}
              onChange={(event) => handleChange('name', event.target.value)}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={cn(
                'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900',
                'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
                'dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                errors.name && 'border-red-500',
              )}
            />
            {errors.name && (
              <p id="contact-name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={cn(
                'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900',
                'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
                'dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                errors.email && 'border-red-500',
              )}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={values.message}
              onChange={(event) => handleChange('message', event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={cn(
                'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900',
                'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
                'dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                errors.message && 'border-red-500',
              )}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit">Send message</Button>
        </form>
        {submitted && (
          <p
            role="status"
            className="mt-4 rounded-lg bg-emerald-100 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
          >
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  )
}

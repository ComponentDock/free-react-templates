import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please write a message of at least 10 characters'),
})

type ContactValues = z.infer<typeof contactSchema>

const initialValues: ContactValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

const details = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@curacare.example',
    href: 'mailto:hello@curacare.example',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Wellness Avenue, Springfield',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon-Fri: 8:00 AM - 6:00 PM · Sat: 9:00 AM - 1:00 PM',
    href: undefined,
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
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setConfirmation(
      `Thanks, ${result.data.fullName}! We will get back to you within one business day.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="contact" className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Questions about a treatment, an appointment or your bill? Our team is here to help.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-0.5 block font-bold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block font-bold text-gray-900 dark:text-white">
                      {detail.value}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {confirmation ? (
              <div className="rounded-2xl border border-success-200 bg-success-50 p-8 dark:border-success-800 dark:bg-success-900/30">
                <CheckCircle2
                  className="h-10 w-10 text-success-600 dark:text-success-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{confirmation}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={values.fullName}
                      onChange={(event) => handleChange('fullName', event.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'contact-name-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                        errors.fullName && 'border-red-400',
                      )}
                    />
                    {errors.fullName && (
                      <p id="contact-name-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                        errors.email && 'border-red-400',
                      )}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(event) => handleChange('phone', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Message <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={values.message}
                      onChange={(event) => handleChange('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white',
                        errors.message && 'border-red-400',
                      )}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1 text-xs font-medium text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full rounded-xl sm:w-auto">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

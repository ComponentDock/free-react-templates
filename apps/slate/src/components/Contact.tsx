import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CheckCircle2, Send } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { contactDetails } from '../data'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Please write a message of at least 10 characters'),
})

type ContactValues = z.infer<typeof contactSchema>

const initialValues: ContactValues = {
  name: '',
  email: '',
  message: '',
}

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
        message: fieldErrors.message?.[0],
      })
      return
    }
    setConfirmation(
      `Thanks, ${result.data.name}! Your message has been received — we will get back to you within one business day.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Send us a message and we will get back to you within one
            business day.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate text-white">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-500">{detail.label}</span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-0.5 block font-bold text-gray-900 transition-colors hover:text-slate"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block font-bold text-gray-900">{detail.value}</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {confirmation ? (
              <div className="rounded-2xl border border-slate/20 bg-slate/5 p-8">
                <CheckCircle2 className="h-10 w-10 text-slate" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-bold text-gray-900">Message Sent</h3>
                <p className="mt-2 text-sm text-gray-700">{confirmation}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-semibold text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={values.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate',
                        errors.name && 'border-red-400',
                      )}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-semibold text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate',
                        errors.email && 'border-red-400',
                      )}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={values.message}
                      onChange={(event) => handleChange('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate',
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
                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full bg-slate hover:bg-slate-dark sm:w-auto"
                >
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

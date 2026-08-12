import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Please write a message of at least 10 characters'),
})

type QuoteValues = z.infer<typeof quoteSchema>

const initialValues: QuoteValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

const inputClasses =
  'w-full rounded-[5px] border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60'

export function ContactQuote() {
  const [values, setValues] = useState<QuoteValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof QuoteValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setConfirmation(
      `Thanks, ${result.data.name}! We will get back to you with a free quotation within 24 hours.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="contact" className="bg-brand-gradient">
      <div className="grid lg:grid-cols-2">
        <img
          src="https://picsum.photos/id/180/900/700"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Get a free Quotation
          </h2>

          {confirmation ? (
            <div className="mt-10 rounded-[5px] bg-white/15 p-8">
              <CheckCircle2 className="h-10 w-10 text-white" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold text-white">Quotation Request Received</h3>
              <p className="mt-2 text-sm leading-6 text-white/85">{confirmation}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={cn(inputClasses, 'mt-2', errors.name && 'border-red-200')}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs font-medium text-white">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  className={cn(inputClasses, 'mt-2')}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={cn(inputClasses, 'mt-2', errors.email && 'border-red-200')}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs font-medium text-white">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-white">
                  Write message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(inputClasses, 'mt-2', errors.message && 'border-red-200')}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs font-medium text-white">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex h-[50px] items-center justify-center rounded-[5px] bg-white px-10 font-btn text-sm font-semibold uppercase tracking-wide text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

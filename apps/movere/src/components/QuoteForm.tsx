import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Check, CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  moveDate: z.string().optional(),
  movingFrom: z.string().min(2, 'Please enter a pickup location'),
  movingTo: z.string().min(2, 'Please enter a destination'),
  homeSize: z.string(),
  services: z.array(z.string()),
  details: z.string().optional(),
})

type QuoteValues = z.infer<typeof quoteSchema>

const initialValues: QuoteValues = {
  fullName: '',
  email: '',
  phone: '',
  moveDate: '',
  movingFrom: '',
  movingTo: '',
  homeSize: 'Studio',
  services: [],
  details: '',
}

const homeSizes = ['Studio', '1 Bedroom', '2-3 Bedrooms', '4+ Bedrooms'] as const

const serviceOptions = ['Packing & Unpacking', 'Storage', 'Piano / Specialty Items'] as const

const reasons = [
  'Free, no-obligation quotes',
  'Licensed & insured in all 50 states',
  'Flat-rate pricing with no hidden fees',
  'Trained, background-checked crews',
] as const

export function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof QuoteValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleServiceToggle = (option: (typeof serviceOptions)[number]) => {
    setValues((current) => ({
      ...current,
      services: current.services.includes(option)
        ? current.services.filter((item) => item !== option)
        : [...current.services, option],
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        movingFrom: fieldErrors.movingFrom?.[0],
        movingTo: fieldErrors.movingTo?.[0],
        homeSize: fieldErrors.homeSize?.[0],
      })
      return
    }
    setConfirmation(
      `Thanks, ${result.data.fullName}! We will send your free quote within 24 hours.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="quote" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Free Quote
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get Your Free Moving Quote
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-400">
              Tell us about your move and receive a detailed, no-obligation estimate within 24
              hours.
            </p>

            {confirmation ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/30">
                <CheckCircle2
                  className="h-10 w-10 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
                  Quote Request Received
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{confirmation}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      value={values.fullName}
                      onChange={(event) => handleChange('fullName', event.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.fullName && 'border-red-400',
                      )}
                    />
                    {errors.fullName && (
                      <p id="full-name-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.email && 'border-red-400',
                      )}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(event) => handleChange('phone', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="move-date"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Move Date
                    </label>
                    <input
                      id="move-date"
                      type="date"
                      value={values.moveDate}
                      onChange={(event) => handleChange('moveDate', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="moving-from"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Moving From <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="moving-from"
                      type="text"
                      value={values.movingFrom}
                      onChange={(event) => handleChange('movingFrom', event.target.value)}
                      aria-invalid={Boolean(errors.movingFrom)}
                      aria-describedby={errors.movingFrom ? 'moving-from-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.movingFrom && 'border-red-400',
                      )}
                    />
                    {errors.movingFrom && (
                      <p id="moving-from-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.movingFrom}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="moving-to"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Moving To <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="moving-to"
                      type="text"
                      value={values.movingTo}
                      onChange={(event) => handleChange('movingTo', event.target.value)}
                      aria-invalid={Boolean(errors.movingTo)}
                      aria-describedby={errors.movingTo ? 'moving-to-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.movingTo && 'border-red-400',
                      )}
                    />
                    {errors.movingTo && (
                      <p id="moving-to-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.movingTo}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="home-size"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Home Size
                  </label>
                  <select
                    id="home-size"
                    value={values.homeSize}
                    onChange={(event) => handleChange('homeSize', event.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    {homeSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Additional Services
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <input
                          type="checkbox"
                          checked={values.services.includes(option)}
                          onChange={() => handleServiceToggle(option)}
                          className="h-4 w-4 rounded border-gray-300 accent-primary-600"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="details"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    value={values.details}
                    onChange={(event) => handleChange('details', event.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
                  Get Free Quote
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <ShieldCheck
                  className="h-5 w-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                Why Choose Movere?
              </h3>
              <ul className="mt-4 space-y-3">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                      aria-hidden="true"
                    />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <Phone
                  className="h-5 w-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                Prefer to Call?
              </h3>
              <a
                href="tel:+15558901234"
                className="mt-2 inline-block text-2xl font-extrabold text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                (555) 890-1234
              </a>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Our move coordinators are available 7 days a week.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                <Clock
                  className="h-5 w-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                Business Hours
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between gap-4">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    8:00am – 7:00pm
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    9:00am – 5:00pm
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

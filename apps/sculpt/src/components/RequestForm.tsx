import { useState, type FormEvent } from 'react'
import { Calendar, ChevronDown, User } from 'lucide-react'
import { z } from 'zod'
import { REQUEST_SERVICES } from '../data'

const requestSchema = z.object({
  service: z.string().min(1, 'Please choose a service'),
  fullname: z.string().min(1, 'Please enter your full name'),
  phone: z.string().min(1, 'Please enter your phone number'),
  date: z.string().min(1, 'Please choose a date'),
})

type RequestValues = z.infer<typeof requestSchema>

const FIELDS: { name: keyof RequestValues; label: string; placeholder: string }[] = [
  { name: 'fullname', label: 'Fullname', placeholder: 'Full Name' },
  { name: 'phone', label: 'Phone', placeholder: 'Phone' },
]

/**
 * RequestForm — solid-orange band with a request form (service select,
 * fullname, phone, date) validated with zod; success swaps in a message.
 */
export function RequestForm() {
  const [values, setValues] = useState<RequestValues>({
    service: '',
    fullname: '',
    phone: '',
    date: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof RequestValues, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof RequestValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = requestSchema.safeParse(values)
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Partial<Record<keyof RequestValues, string>>)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="request" aria-label="Request" className="relative bg-brand py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-light text-white">Request</h2>
            <p className="mt-4 text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia.
            </p>
          </div>

          <div className="lg:w-2/3">
            {submitted ? (
              <p role="status" className="bg-white/90 p-6 text-ink">
                Thank you! Your request has been received — we will call you back shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-2 block text-white">
                      Services
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={values.service}
                        onChange={(event) => update('service', event.target.value)}
                        className="h-[50px] w-full appearance-none border-2 border-white bg-white/90 px-5 text-ink focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {REQUEST_SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.service && (
                      <p role="alert" className="mt-1 text-sm font-semibold text-white">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {FIELDS.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="mb-2 block text-white">
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          id={field.name}
                          type="text"
                          value={values[field.name]}
                          onChange={(event) => update(field.name, event.target.value)}
                          placeholder={field.placeholder}
                          className="h-[50px] w-full border-2 border-white bg-white/90 px-5 text-ink placeholder:text-neutral-400 focus:outline-none"
                        />
                        <User
                          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                          aria-hidden="true"
                        />
                      </div>
                      {errors[field.name] && (
                        <p role="alert" className="mt-1 text-sm font-semibold text-white">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="date" className="mb-2 block text-white">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        id="date"
                        type="date"
                        value={values.date}
                        onChange={(event) => update('date', event.target.value)}
                        className="h-[50px] w-full border-2 border-white bg-white/90 px-5 text-ink focus:outline-none"
                      />
                      <Calendar
                        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.date && (
                      <p role="alert" className="mt-1 text-sm font-semibold text-white">
                        {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mx-auto mt-7 block w-full rounded-full border border-white/30 bg-brand px-8 py-3 text-white transition-colors hover:bg-brand-hover"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

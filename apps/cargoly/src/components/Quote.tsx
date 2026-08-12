import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { z } from 'zod'
import { QUOTE_TITLE, SENDER_TEXT, SENDER_TITLE, TRANSPORT_METHODS } from '../data'

const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  contact: z.string().min(5, 'Please enter an email or phone number'),
  departure: z.string().min(2, 'Please enter a departure city'),
  arrival: z.string().min(2, 'Please enter an arrival city'),
  cargo: z.string().min(5, 'Please describe your cargo'),
  method: z.string().min(1, 'Please select a transportation method'),
})

type QuoteValues = z.infer<typeof quoteSchema>

type FieldKey = keyof QuoteValues

const initialValues: QuoteValues = {
  name: '',
  contact: '',
  departure: '',
  arrival: '',
  cargo: '',
  method: '',
}

const fields: ReadonlyArray<{ key: FieldKey; label: string }> = [
  { key: 'name', label: 'Name' },
  { key: 'contact', label: 'Email or phone' },
  { key: 'departure', label: 'Departure' },
  { key: 'arrival', label: 'Arrival' },
  { key: 'cargo', label: 'Cargo Description' },
]

/**
 * Quote request — violet section (source `section.regervation_part`, bg
 * #6345fe): a six-field validated quote form (Name, Email or phone,
 * Departure, Arrival, Cargo Description, Transportation Method) on the left
 * and the "Are You A Sender?" column on the right.
 */
export function Quote() {
  const [values, setValues] = useState<QuoteValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: FieldKey, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        contact: fieldErrors.contact?.[0],
        departure: fieldErrors.departure?.[0],
        arrival: fieldErrors.arrival?.[0],
        cargo: fieldErrors.cargo?.[0],
        method: fieldErrors.method?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thanks ${result.data.name}! We'll email you a quote for ${result.data.departure} → ${result.data.arrival}.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section className="bg-brand py-24" aria-label="Quote request">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-4xl font-bold text-white">{QUOTE_TITLE}</h2>
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            {fields.map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={`quote-${field.key}`}
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white"
                >
                  {field.label}
                </label>
                <input
                  id={`quote-${field.key}`}
                  type="text"
                  value={values[field.key]}
                  onChange={(event) => handleChange(field.key, event.target.value)}
                  aria-invalid={Boolean(errors[field.key])}
                  className="h-12 w-full rounded-[4px] bg-white px-4 text-sm text-ink outline-none transition-shadow placeholder:text-mist focus:ring-2 focus:ring-accent"
                />
                {errors[field.key] ? (
                  <p className="mt-1 text-xs font-semibold text-white">{errors[field.key]}</p>
                ) : null}
              </div>
            ))}
            <div>
              <label
                htmlFor="quote-method"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white"
              >
                Transportation Method
              </label>
              <select
                id="quote-method"
                value={values.method}
                onChange={(event) => handleChange('method', event.target.value)}
                aria-invalid={Boolean(errors.method)}
                className="h-12 w-full rounded-[4px] bg-white px-4 text-sm text-ink outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a method</option>
                {TRANSPORT_METHODS.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              {errors.method ? (
                <p className="mt-1 text-xs font-semibold text-white">{errors.method}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="rounded-[4px] bg-white px-12 py-4 text-sm font-extrabold uppercase text-brand transition-colors hover:bg-accent hover:text-white"
            >
              GET A QUOTE
            </button>
          </form>
          {confirmation ? (
            <p
              role="status"
              className="mt-6 rounded-[4px] bg-white/15 px-4 py-3 text-sm font-semibold text-white"
            >
              {confirmation}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl font-bold text-white">{SENDER_TITLE}</h2>
          <p className="mt-5 leading-relaxed text-white/85">{SENDER_TEXT}</p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase text-white transition-colors hover:text-accent"
          >
            check now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

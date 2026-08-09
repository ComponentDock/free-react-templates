import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CalendarCheck2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const tripSchema = z.object({
  pickup: z.string().min(1, 'Please enter your pickup address'),
  dropOff: z.string().min(1, 'Please enter your drop-off address'),
  journeyDate: z.string().min(1, 'Please choose a journey date'),
  returnDate: z.string().min(1, 'Please choose a return date'),
})

type TripValues = z.infer<typeof tripSchema>

const initialValues: TripValues = { pickup: '', dropOff: '', journeyDate: '', returnDate: '' }

const fields = [
  { key: 'pickup', label: 'Pickup address', type: 'text' },
  { key: 'dropOff', label: 'Drop-off address', type: 'text' },
  { key: 'journeyDate', label: 'Journey date', type: 'date' },
  { key: 'returnDate', label: 'Return date', type: 'date' },
] as const

export function TripForm() {
  const [values, setValues] = useState<TripValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof TripValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof TripValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = tripSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        pickup: fieldErrors.pickup?.[0],
        dropOff: fieldErrors.dropOff?.[0],
        journeyDate: fieldErrors.journeyDate?.[0],
        returnDate: fieldErrors.returnDate?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thanks! Your trip from ${result.data.pickup} to ${result.data.dropOff} has been requested.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="m-0 font-display text-2xl font-black text-ink">Begin your trip here</h3>
            <p className="mt-1 text-sm text-mist">32 cars available for rent</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
            32 cars available
          </span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-xl bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fields.map((field) => (
              <div key={field.key} className="lg:col-span-1">
                <label
                  htmlFor={`trip-${field.key}`}
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  {field.label}
                </label>
                <input
                  id={`trip-${field.key}`}
                  type={field.type}
                  value={values[field.key]}
                  onChange={(event) => handleChange(field.key, event.target.value)}
                  aria-invalid={Boolean(errors[field.key])}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
                {errors[field.key] && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors[field.key]}</p>
                )}
              </div>
            ))}
            <div className="flex items-end">
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </div>
          </div>
          {confirmation && (
            <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              {confirmation}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

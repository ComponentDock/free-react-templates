import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'

const reservationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  date: z.string().min(1, 'Please choose a date'),
  time: z.string().min(1, 'Please choose a time'),
  guests: z.string().min(1, 'Please choose the number of guests'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  notes: z.string(),
})

const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'] as const
const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'] as const

type ReservationValues = z.infer<typeof reservationSchema>

const initialValues: ReservationValues = {
  name: '',
  email: '',
  date: '',
  time: '',
  guests: '',
  phone: '',
  notes: '',
}

const inputClasses =
  'mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500'

export function Reservation() {
  const [values, setValues] = useState<ReservationValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof ReservationValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = reservationSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        date: fieldErrors.date?.[0],
        time: fieldErrors.time?.[0],
        guests: fieldErrors.guests?.[0],
        phone: fieldErrors.phone?.[0],
        notes: fieldErrors.notes?.[0],
      })
      return
    }
    setConfirmation(
      `Thank you, ${result.data.name}. Your reservation request has been received — we will confirm shortly.`,
    )
    setValues(initialValues)
  }

  return (
    <section id="reservations" className="relative bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Make a Reservation
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Reserve your table and let us take care of the rest — from intimate dinners to
            celebrations with family and friends.
          </p>
        </div>

        {confirmation ? (
          <p
            role="status"
            className="mt-12 rounded-xl bg-gray-800 p-6 text-center text-lg text-white"
          >
            {confirmation}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 grid gap-6 rounded-2xl bg-gray-800 p-8 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="res-name" className="text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                id="res-name"
                type="text"
                placeholder="Your name"
                value={values.name}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange('name', event.target.value)
                }
                className={inputClasses}
              />
              {errors.name && <p className="mt-1 text-sm text-primary-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="res-email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="res-email"
                type="email"
                placeholder="your@email.com"
                value={values.email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange('email', event.target.value)
                }
                className={inputClasses}
              />
              {errors.email && <p className="mt-1 text-sm text-primary-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="res-date" className="text-sm font-medium text-gray-300">
                Date
              </label>
              <input
                id="res-date"
                type="date"
                value={values.date}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange('date', event.target.value)
                }
                className={inputClasses}
              />
              {errors.date && <p className="mt-1 text-sm text-primary-400">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="res-time" className="text-sm font-medium text-gray-300">
                Time
              </label>
              <select
                id="res-time"
                value={values.time}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  handleChange('time', event.target.value)
                }
                className={inputClasses}
              >
                <option value="">Select a time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && <p className="mt-1 text-sm text-primary-400">{errors.time}</p>}
            </div>

            <div>
              <label htmlFor="res-guests" className="text-sm font-medium text-gray-300">
                Guests
              </label>
              <select
                id="res-guests"
                value={values.guests}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  handleChange('guests', event.target.value)
                }
                className={inputClasses}
              >
                <option value="">Select guests</option>
                {guestOptions.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              {errors.guests && <p className="mt-1 text-sm text-primary-400">{errors.guests}</p>}
            </div>

            <div>
              <label htmlFor="res-phone" className="text-sm font-medium text-gray-300">
                Phone
              </label>
              <input
                id="res-phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={values.phone}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange('phone', event.target.value)
                }
                className={inputClasses}
              />
              {errors.phone && <p className="mt-1 text-sm text-primary-400">{errors.phone}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="res-notes" className="text-sm font-medium text-gray-300">
                Notes
              </label>
              <textarea
                id="res-notes"
                rows={3}
                placeholder="Dietary restrictions, celebrations, seating preferences..."
                value={values.notes}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                  handleChange('notes', event.target.value)
                }
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary-600/25">
                Request Reservation
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

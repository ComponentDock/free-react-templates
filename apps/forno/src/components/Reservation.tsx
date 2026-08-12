import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'

const reservationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please choose a date'),
  time: z.string().min(1, 'Please choose a time'),
  persons: z.string().min(1, 'Please choose the number of persons'),
})

type ReservationValues = z.infer<typeof reservationSchema>

const initialValues: ReservationValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  persons: '',
}

const hours = [
  { day: 'Monday', time: '8:00AM - 9:00PM' },
  { day: 'Tuesday', time: '8:00AM - 9:00PM' },
  { day: 'Wednesday', time: '8:00AM - 9:00PM' },
  { day: 'Thursday', time: '8:00AM - 9:00PM' },
  { day: 'Friday', time: '8:00AM - 9:00PM' },
  { day: 'Saturday', time: '8:00AM - 9:00PM' },
  { day: 'Sunday', time: '8:00AM - 9:00PM' },
] as const

const times = ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'] as const
const personOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'] as const

const inputClasses =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500'

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
        phone: fieldErrors.phone?.[0],
        date: fieldErrors.date?.[0],
        time: fieldErrors.time?.[0],
        persons: fieldErrors.persons?.[0],
      })
      return
    }
    setConfirmation(
      `Thank you, ${result.data.name}. Your table request has been received — we will confirm shortly.`,
    )
    setValues(initialValues)
  }

  return (
    <section id="reservation" className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/forno-16/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="font-script text-4xl text-primary-500">Book a table</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
            Make Reservation
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="rounded-md bg-white/95 p-8 lg:col-span-3">
            {confirmation ? (
              <p role="status" className="py-8 text-center text-lg text-gray-900">
                {confirmation}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    placeholder="Your Name"
                    value={values.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('name', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="res-email" className="text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('email', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="res-phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('phone', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="res-date" className="text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    value={values.date}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('date', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  />
                  {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="res-time" className="text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <select
                    id="res-time"
                    value={values.time}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                      handleChange('time', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  >
                    <option value="">Select time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                </div>

                <div>
                  <label htmlFor="res-persons" className="text-sm font-medium text-gray-700">
                    Persons
                  </label>
                  <select
                    id="res-persons"
                    value={values.persons}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                      handleChange('persons', event.target.value)
                    }
                    className={`${inputClasses} mt-1`}
                  >
                    <option value="">Select persons</option>
                    {personOptions.map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                  {errors.persons && <p className="mt-1 text-sm text-red-600">{errors.persons}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full rounded-md sm:w-auto">
                    Book a Table
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="rounded-md bg-primary-500 p-8 text-white lg:col-span-2">
            <h3 className="text-xl font-semibold">Open Hours</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {hours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between gap-4">
                  <span className="uppercase tracking-wider">{entry.day}</span>
                  <span className="font-medium">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'

const reservationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please choose a date'),
  time: z.string().min(1, 'Please choose a time'),
  persons: z.string().min(1, 'Please choose number of persons'),
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

const timeSlots = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
] as const

const personOptions = [
  '1 Person',
  '2 Persons',
  '3 Persons',
  '4 Persons',
  '5 Persons',
  '6+ Persons',
] as const

const inputClasses =
  'w-full rounded-[3px] border border-[#eee] bg-white px-4 py-3 text-[13px] font-light text-ink placeholder-[#999999] focus:border-brand focus:outline-none'

/** Parallax background reservation section with dark overlay and a
 *  form: name, email, phone, date, time select, person select. */
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
      `Thank you, ${result.data.name}. Your table is reserved — we will confirm shortly.`,
    )
    setValues(initialValues)
  }

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-[120px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/flavor-reservation/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white">Make A Reservation</h1>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[10px] bg-white px-10 py-16">
          {confirmation ? (
            <p role="status" className="py-16 text-center text-lg text-ink">
              {confirmation}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={values.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('name', event.target.value)
                    }
                    className={inputClasses}
                  />
                  {errors.name && <p className="mt-1 text-xs text-brand">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={values.email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('email', event.target.value)
                    }
                    className={inputClasses}
                  />
                  {errors.email && <p className="mt-1 text-xs text-brand">{errors.email}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={values.phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('phone', event.target.value)
                    }
                    className={inputClasses}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-brand">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    value={values.date}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChange('date', event.target.value)
                    }
                    className={inputClasses}
                  />
                  {errors.date && <p className="mt-1 text-xs text-brand">{errors.date}</p>}
                </div>
                <div>
                  <select
                    value={values.time}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                      handleChange('time', event.target.value)
                    }
                    className={inputClasses}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="mt-1 text-xs text-brand">{errors.time}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <select
                    value={values.persons}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                      handleChange('persons', event.target.value)
                    }
                    className={inputClasses}
                  >
                    <option value="">Number of Persons</option>
                    {personOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.persons && <p className="mt-1 text-xs text-brand">{errors.persons}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-[3px] bg-brand px-8 py-3 text-sm font-medium text-white uppercase transition-colors duration-300 hover:bg-ink"
                  >
                    Book a table
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

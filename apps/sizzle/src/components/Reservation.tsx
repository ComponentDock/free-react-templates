import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { reservation } from '../data'

const reservationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please choose a date & time'),
  event: z.string().min(1, 'Please choose an event'),
})

type ReservationValues = z.infer<typeof reservationSchema>

const initialValues: ReservationValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  event: '',
}

const inputClasses =
  'w-full rounded-none border border-[#eee] bg-white px-4 py-3 text-[13px] font-light text-ink placeholder-[#999999] focus:border-brand focus:outline-none'

/** Photo-background reservation section: dark overlay, left heading/copy,
 *  white form panel with client-side validation and a success state. */
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
        event: fieldErrors.event?.[0],
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
      className="relative overflow-hidden py-[120px]"
      style={{ backgroundImage: `url(${reservation.image})` }}
    >
      <div className="absolute inset-0 bg-overlay" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="text-white">
          <h1 className="text-4xl font-semibold leading-tight">{reservation.heading}</h1>
          <p className="mt-6 font-light leading-relaxed text-white/90">{reservation.body}</p>
        </div>

        <div className="bg-white px-10 py-16 lg:px-[40px] lg:py-[100px]">
          {confirmation ? (
            <p role="status" className="py-16 text-center text-lg text-ink">
              {confirmation}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                  type="datetime-local"
                  placeholder="Select Date & time"
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
                  value={values.event}
                  onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                    handleChange('event', event.target.value)
                  }
                  className={inputClasses}
                >
                  <option value="">Select Event</option>
                  {reservation.events.map((eventName) => (
                    <option key={eventName} value={eventName}>
                      {eventName}
                    </option>
                  ))}
                </select>
                {errors.event && <p className="mt-1 text-xs text-brand">{errors.event}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-brand px-[30px] leading-[42px] text-sm font-medium text-white transition-colors duration-300 hover:bg-ink"
              >
                {reservation.cta}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

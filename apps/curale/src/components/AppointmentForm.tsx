import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { isValidAppointment, validateAppointment, type AppointmentValues } from '../lib/appointment'

const initialValues: AppointmentValues = { name: '', email: '', date: '', message: '' }

/** Appointment form on a background image under a blue→cyan gradient
 *  overlay, with a decorative #f9f9f9 frame. Validates name/email/date
 *  (required) and swaps to a success message on valid submit — a
 *  documented interactive addition over the static source demo. */
export function AppointmentForm() {
  const [values, setValues] = useState<AppointmentValues>(initialValues)
  const [errors, setErrors] = useState<ReturnType<typeof validateAppointment>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof AppointmentValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateAppointment(values)
    setErrors(nextErrors)
    if (isValidAppointment(values)) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 p-16 text-center text-white"
      >
        <CheckCircle2 className="h-12 w-12" aria-hidden="true" />
        <p className="text-[18px] font-medium">Your appointment request has been received.</p>
        <p className="text-[14px] opacity-90">We will confirm your visit shortly.</p>
      </div>
    )
  }

  return (
    <div
      data-testid="appointment-form"
      className="relative p-8 text-center md:p-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/curale-appointment/800/900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top right, rgba(21,228,253,0.9), rgba(36,76,253,0.9))',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-[5%] right-[-30%] h-[110%] w-[60%] border-[10px] border-[#f9f9f9]"
        aria-hidden="true"
      />
      <div className="relative">
        <h3 className="mb-8 text-[24px] font-bold text-white">appointment now</h3>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="text-left">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              value={values.name}
              onChange={(event) => handleChange('name', event.target.value)}
              className="w-full border-none bg-white p-3.5 text-[15px] text-ink placeholder:text-body"
            />
            {errors.name && (
              <p className="mt-1.5 text-left text-[13px] font-medium text-white">{errors.name}</p>
            )}
          </div>
          <div className="text-left">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              value={values.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className="w-full border-none bg-white p-3.5 text-[15px] text-ink placeholder:text-body"
            />
            {errors.email && (
              <p className="mt-1.5 text-left text-[13px] font-medium text-white">{errors.email}</p>
            )}
          </div>
          <div className="text-left">
            <input
              type="date"
              placeholder="Date"
              aria-label="Date"
              value={values.date}
              onChange={(event) => handleChange('date', event.target.value)}
              className="w-full border-none bg-white p-3.5 text-[15px] text-ink placeholder:text-body"
            />
            {errors.date && (
              <p className="mt-1.5 text-left text-[13px] font-medium text-white">{errors.date}</p>
            )}
          </div>
          <div className="text-left">
            <textarea
              rows={7}
              placeholder="Message"
              aria-label="Message"
              value={values.message}
              onChange={(event) => handleChange('message', event.target.value)}
              className="w-full resize-none border-none bg-white p-3.5 text-[15px] text-ink placeholder:text-body"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-[#244cfd] to-[#15e4fd] px-8 py-3 text-[12px] font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-80"
          >
            appointment now
          </button>
        </form>
      </div>
    </div>
  )
}

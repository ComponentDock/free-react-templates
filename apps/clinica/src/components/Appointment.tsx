import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { appointment } from '../data'
import {
  hasErrors,
  validateAppointment,
  type AppointmentErrors,
  type AppointmentValues,
} from '../lib/appointment'

const initialValues: AppointmentValues = {
  name: '',
  phone: '',
  doctor: '',
  email: '',
  message: '',
}

const fieldClass =
  'h-[60px] w-full border-b-2 border-[#e9f0f4] bg-transparent text-[16px] font-medium capitalize text-[#112957] placeholder:font-light placeholder:text-[#112957]/70 focus:border-brand focus:outline-none'

/** Right-aligned "Appointment Form" on a `#f7fdff` wrapper with a tall
 *  photo on the left, underline-style inputs and a blue-gradient
 *  "Submit Now" button; validates and shows a success state. */
export function Appointment() {
  const [values, setValues] = useState<AppointmentValues>(initialValues)
  const [errors, setErrors] = useState<AppointmentErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateAppointment(values)
    setErrors(nextErrors)
    setSubmitted(!hasErrors(nextErrors))
  }

  return (
    <section id="contact-section" className="relative bg-white py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="flex justify-end">
          <div className="w-full bg-[#f7fdff] lg:w-7/12">
            <div className="px-8 pt-16 md:px-[51px] md:pt-[111px]">
              <span className="flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
                <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
                {appointment.kicker}
              </span>
              <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
                {appointment.title}
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="px-8 py-10 md:px-[69px] md:pb-[115px]"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="appointment-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="appointment-name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-2 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="appointment-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="appointment-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    className={fieldClass}
                  />
                  {errors.phone && (
                    <p role="alert" className="mt-2 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="appointment-doctor" className="sr-only">
                    Doctor
                  </label>
                  <select
                    id="appointment-doctor"
                    name="doctor"
                    value={values.doctor}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.doctor)}
                    className={cn(fieldClass, 'capitalize')}
                  >
                    <option value="">Choose doctor</option>
                    {appointment.doctors.map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                  {errors.doctor && (
                    <p role="alert" className="mt-2 text-sm text-red-600">
                      {errors.doctor}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="appointment-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="appointment-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="appointment-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(fieldClass, 'h-[130px] resize-none py-3 tracking-[0.08em]')}
                />
                {errors.message && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="mt-10 rounded-md bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)] bg-[length:200%_auto] px-[58px] py-[18px] text-[16px] font-semibold text-white shadow-[0_7px_21px_rgba(0,0,0,0.12)] transition-all hover:bg-[position:right_center]"
              >
                Submit Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              {submitted && (
                <p role="status" className="mt-6 text-[16px] font-semibold text-brand">
                  Your appointment request has been sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <img
        src={appointment.image}
        alt={appointment.alt}
        className="absolute left-0 top-0 hidden h-full w-[46%] object-cover lg:block"
      />
    </section>
  )
}

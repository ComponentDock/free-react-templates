import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { COUNTDOWN } from '../data'

/* Registration (source: div.registration_area — navy #002347 background,
   left: "Register Now" + blurb + four #334f6c countdown tiles; right:
   "Courses for Free" form with name/phone/email and a gold Submit). */
const registrationSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  phone: z.string().min(1, 'Please enter your phone number'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

type RegistrationValues = z.infer<typeof registrationSchema>

const initialValues: RegistrationValues = { name: '', phone: '', email: '' }

const fields = [
  { key: 'name', label: 'Your Name', type: 'text' },
  { key: 'phone', label: 'Your Phone Number', type: 'tel' },
  { key: 'email', label: 'Your Email Address', type: 'email' },
] as const

export function Registration() {
  const [values, setValues] = useState<RegistrationValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof RegistrationValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = registrationSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(`Thanks, ${result.data.name}! Your spot has been reserved.`)
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="register" className="bg-primary py-[100px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-[15px] lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-heading text-[42px] font-medium text-white">Register Now</h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[25px] text-white/80">
            There is a moment in the life of any aspiring astronomer that it is time to buy that
            first telescope.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {COUNTDOWN.map((tile) => (
              <div key={tile.label} className="bg-tile px-5 py-[35px] text-center">
                <p className="font-heading text-[42px] font-medium text-white">{tile.value}</p>
                <span className="mt-2 block text-[16px] text-white/80">{tile.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="bg-card p-10">
            <h3 className="font-heading text-[24px] font-medium text-primary">Courses for Free</h3>
            <p className="mt-2 text-[16px] text-muted">It is high time for learning</p>
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              {fields.map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`register-${field.key}`}
                    className="mb-1 block text-[14px] font-medium text-primary"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`register-${field.key}`}
                    type={field.type}
                    value={values[field.key]}
                    onChange={(event) => handleChange(field.key, event.target.value)}
                    aria-invalid={Boolean(errors[field.key])}
                    className="w-full border border-primary/20 bg-white px-4 py-3 text-[14px] text-primary outline-none transition-colors focus:border-accent"
                  />
                  {errors[field.key] && (
                    <p className="mt-1 text-[13px] font-medium text-red-600">{errors[field.key]}</p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="h-[50px] w-full rounded-[5px] bg-accent px-12 text-[13px] font-medium uppercase text-primary transition-colors hover:bg-primary hover:text-accent"
              >
                Submit
              </button>
              {confirmation && (
                <p className="rounded bg-green-50 px-4 py-3 text-[14px] font-semibold text-green-700">
                  {confirmation}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

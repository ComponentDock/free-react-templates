import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { COURSE_OPTIONS } from '../data'

const quoteSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  course: z.string().min(1, 'Please select a course'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
})

type QuoteErrors = Partial<Record<keyof z.infer<typeof quoteSchema>, string>>

/**
 * QuoteForm — "Request A Quote" section over an orange→navy gradient
 * with a five-field form (first/last name, course select, phone,
 * message). Validated with zod; per-field errors, no submission until
 * valid.
 */
export function QuoteForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    course: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sent, setSent] = useState(false)

  const update =
    (field: keyof typeof values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as QuoteErrors)
      return
    }
    setErrors({})
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/60'

  return (
    <section
      id="admissions-section"
      className="relative bg-gradient-to-tr from-primary to-navy py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Request A Quote</h2>
          <p className="mt-4 text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {sent ? (
          <p
            role="status"
            className="mx-auto max-w-xl rounded-lg bg-white/10 p-6 text-center font-semibold text-white"
          >
            Thank you! Your quote request has been received.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="quote-first-name" className="sr-only">
                  First Name
                </label>
                <input
                  id="quote-first-name"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={update('firstName')}
                  className={fieldClass}
                />
                {errors.firstName && (
                  <p role="alert" className="mt-1 text-sm font-semibold text-white">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="quote-last-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="quote-last-name"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={update('lastName')}
                  className={fieldClass}
                />
                {errors.lastName && (
                  <p role="alert" className="mt-1 text-sm font-semibold text-white">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="quote-course" className="sr-only">
                  Select Your Course
                </label>
                <select
                  id="quote-course"
                  value={values.course}
                  onChange={update('course')}
                  className={`${fieldClass} ${values.course === '' ? 'text-white/50' : 'text-white'}`}
                >
                  <option value="" disabled className="text-gray-700">
                    Select Your Course
                  </option>
                  {COURSE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="text-gray-700">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p role="alert" className="mt-1 text-sm font-semibold text-white">
                    {errors.course}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="quote-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={update('phone')}
                  className={fieldClass}
                />
                {errors.phone && (
                  <p role="alert" className="mt-1 text-sm font-semibold text-white">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="quote-message" className="sr-only">
                Message
              </label>
              <textarea
                id="quote-message"
                placeholder="Message"
                rows={5}
                value={values.message}
                onChange={update('message')}
                className={fieldClass}
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-sm font-semibold text-white">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl border-2 border-white bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Request A Quote
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

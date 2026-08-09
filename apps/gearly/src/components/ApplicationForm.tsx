import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { ClipboardList } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const inquirySchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  phone: z.string().min(1, 'Please enter your phone'),
  dateTime: z.string().min(1, 'Please choose a date & time'),
  courseType: z.string().min(1, 'Please choose a course type'),
  carType: z.string().min(1, 'Please choose a car type'),
})

type InquiryValues = z.infer<typeof inquirySchema>

const initialValues: InquiryValues = {
  name: '',
  email: '',
  phone: '',
  dateTime: '',
  courseType: '',
  carType: '',
}

const courseOptions = ['Safe Driving Courses', 'Motorhome Drivers'] as const
const carOptions = ['Hatchback', 'Sedan'] as const

export function ApplicationForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof InquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = inquirySchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        dateTime: fieldErrors.dateTime?.[0],
        courseType: fieldErrors.courseType?.[0],
        carType: fieldErrors.carType?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thanks, ${result.data.name}! Your ${result.data.courseType} inquiry for a ${result.data.carType} has been received.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

  return (
    <section id="contact" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Giving Best Options For You
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase text-ink dark:text-white">
            Application Form
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 rounded-2xl bg-paper p-6 shadow-sm dark:bg-gray-900 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {(
              [
                { key: 'name', label: 'Your name', type: 'text' },
                { key: 'email', label: 'Your Email', type: 'email' },
                { key: 'phone', label: 'Your Phone', type: 'tel' },
                { key: 'dateTime', label: 'Date & time', type: 'datetime-local' },
              ] as const
            ).map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={`inquiry-${field.key}`}
                  className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
                >
                  {field.label}
                </label>
                <input
                  id={`inquiry-${field.key}`}
                  type={field.type}
                  value={values[field.key]}
                  onChange={(event) => handleChange(field.key, event.target.value)}
                  aria-invalid={Boolean(errors[field.key])}
                  className={inputClass}
                />
                {errors[field.key] && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors[field.key]}</p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="inquiry-courseType"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                Courses type
              </label>
              <select
                id="inquiry-courseType"
                value={values.courseType}
                onChange={(event) => handleChange('courseType', event.target.value)}
                aria-invalid={Boolean(errors.courseType)}
                className={inputClass}
              >
                <option value="">Select a course</option>
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.courseType && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.courseType}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-carType"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                Car type
              </label>
              <select
                id="inquiry-carType"
                value={values.carType}
                onChange={(event) => handleChange('carType', event.target.value)}
                aria-invalid={Boolean(errors.carType)}
                className={inputClass}
              >
                <option value="">Select a car</option>
                {carOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.carType && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.carType}</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button type="submit" size="lg" className="w-full uppercase sm:w-auto">
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Send inquiry
            </Button>
          </div>

          {confirmation && (
            <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700">
              {confirmation}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

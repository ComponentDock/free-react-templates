import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CircleCheck, Check } from 'lucide-react'

const registerSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    phone: z.string().optional(),
    website: z.string().optional(),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters'),
    rePassword: z.string().min(1, 'Please re-type your password'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'You must agree to the terms' }),
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  })

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  website?: string
  password?: string
  rePassword?: string
  terms?: string
}

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    password: '',
    rePassword: '',
    terms: true,
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FieldErrors]
        return next
      })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = registerSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FieldErrors
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CircleCheck className="h-16 w-16 text-[var(--color-brand)]" aria-hidden="true" />
        <h3 className="text-2xl font-medium text-gray-900">Register</h3>
        <p className="text-lg text-gray-600">You&apos;re all set!</p>
      </div>
    )
  }

  const inputClass =
    'h-[54px] w-full rounded bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-1'

  return (
    <>
      <h3 className="mb-2 text-2xl font-medium text-gray-900">Register</h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        {/* First Name + Last Name */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-normal text-gray-900">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="e.g. John"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              className={inputClass}
            />
            {errors.firstName && (
              <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-normal text-gray-900">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="e.g. Smith"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              className={inputClass}
            />
            {errors.lastName && (
              <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm font-normal text-gray-900">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. john@your-domain.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone + Website */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-normal text-gray-900">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="+00 0000 000 0000"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="website" className="mb-1 block text-sm font-normal text-gray-900">
              Website
            </label>
            <input
              id="website"
              type="text"
              placeholder="e.g. https://google.com"
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Password + Re-type Password */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-normal text-gray-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
              className={inputClass}
            />
            {errors.password && (
              <p id="password-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="rePassword" className="mb-1 block text-sm font-normal text-gray-900">
              Re-type Password
            </label>
            <input
              id="rePassword"
              type="password"
              placeholder="Your Password"
              value={formData.rePassword}
              onChange={(e) => handleChange('rePassword', e.target.value)}
              aria-invalid={!!errors.rePassword}
              aria-describedby={errors.rePassword ? 'rePassword-error' : undefined}
              className={inputClass}
            />
            {errors.rePassword && (
              <p id="rePassword-error" role="alert" className="mt-1 text-xs text-red-600">
                {errors.rePassword}
              </p>
            )}
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="mb-5 mt-4">
          <label className="flex cursor-pointer items-start gap-2 text-sm text-[var(--color-caption)]">
            <span className="relative mt-0.5 flex items-center justify-center">
              <input
                type="checkbox"
                checked={formData.terms}
                onChange={(e) => handleChange('terms', e.target.checked)}
                className="peer sr-only"
                aria-describedby={errors.terms ? 'terms-error' : undefined}
              />
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded border-2 border-[var(--color-checkbox-idle)] bg-white transition-colors hover:border-[var(--color-checkbox-hover)] peer-checked:border-[var(--color-brand)] peer-checked:bg-[var(--color-brand)]"
              >
                {formData.terms && <Check className="h-3.5 w-3.5 text-white" />}
              </span>
            </span>
            <span>
              Creating an account means you&apos;re okay with our{' '}
              <a href="#" className="underline transition-colors duration-300 hover:text-gray-900">
                Terms and Conditions
              </a>{' '}
              and our{' '}
              <a href="#" className="underline transition-colors duration-300 hover:text-gray-900">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.terms && (
            <p id="terms-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.terms}
            </p>
          )}
        </div>

        {/* Submit button — left-aligned per spec */}
        <button
          type="submit"
          className="h-[54px] cursor-pointer rounded bg-[var(--color-brand)] px-[30px] text-base font-medium text-white transition-all duration-150 hover:bg-[var(--color-brand-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2"
        >
          Register
        </button>
      </form>
    </>
  )
}

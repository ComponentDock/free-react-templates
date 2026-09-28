import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CircleCheck, Check } from 'lucide-react'

const registerSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
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
  name?: string
  email?: string
  password?: string
  rePassword?: string
  terms?: string
}

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    'w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[var(--color-brand)] focus:ring-0'

  return (
    <>
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-medium text-gray-900">Register</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
          Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
        </p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block text-xs text-[var(--color-muted)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-xs text-[var(--color-muted)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
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

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-1 block text-xs text-[var(--color-muted)]">
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

        {/* Re-type Password */}
        <div className="mb-4">
          <label htmlFor="rePassword" className="mb-1 block text-xs text-[var(--color-muted)]">
            Re-type Password
          </label>
          <input
            id="rePassword"
            type="password"
            placeholder="Re-type Password"
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

        {/* Terms checkbox + Sign In link */}
        <div className="mb-5 flex items-center">
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
              <a href="#" className="underline transition-colors duration-300 hover:text-gray-900">
                Terms and Conditions
              </a>
            </span>
          </label>
          <span className="ml-auto">
            <a
              href="#"
              className="text-sm text-[var(--color-caption)] underline transition-colors duration-300 hover:text-gray-900"
            >
              Sign In
            </a>
          </span>
        </div>
        {errors.terms && (
          <p id="terms-error" role="alert" className="mb-4 text-xs text-red-600">
            {errors.terms}
          </p>
        )}

        {/* Submit button — pill shape */}
        <button
          type="submit"
          className="h-[54px] w-full cursor-pointer rounded-full bg-[var(--color-brand)] px-8 text-base font-medium text-white transition-all duration-150 hover:bg-[var(--color-brand-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2"
        >
          Register
        </button>
      </form>
    </>
  )
}

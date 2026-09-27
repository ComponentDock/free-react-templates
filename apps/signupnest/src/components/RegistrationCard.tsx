import type { FormEvent } from 'react'
import { useState } from 'react'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

interface FormErrors {
  email?: string
  password?: string
  confirmPassword?: string
  terms?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format'
  }
  if (!data.password) {
    errors.password = 'Password is required'
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }
  if (!data.terms) {
    errors.terms = 'You must agree to the terms'
  }
  return errors
}

export function RegistrationCard() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleChange(field: keyof FormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  return (
    <div className="flex w-full max-w-[860px] flex-col overflow-hidden rounded-[15px] shadow-lg md:flex-row">
      {/* Left panel — hero image */}
      <div className="relative hidden min-h-[480px] w-[45%] md:block">
        <img
          src="https://picsum.photos/seed/signupnest-hero/600/700"
          alt="Music subscription hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/40" />
        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <div>
            <h2 className="text-[28px] font-bold leading-tight text-white">
              Bring Your Music Along
            </h2>
            <p className="mt-1 text-[20px] font-bold text-white">try Unlimited</p>
          </div>
          <div className="text-right">
            <span className="text-[32px] font-bold text-white">$9.99</span>
            <span className="ml-1 text-[16px] text-white/80">/ Month</span>
          </div>
        </div>
      </div>

      {/* Mobile hero — visible only on small screens */}
      <div className="relative min-h-[200px] md:hidden">
        <img
          src="https://picsum.photos/seed/signupnest-hero/600/400"
          alt="Music subscription hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/40" />
        <div className="relative z-10 flex items-end justify-between p-6">
          <div>
            <h2 className="text-[22px] font-bold text-white">Bring Your Music Along</h2>
            <p className="text-[16px] font-bold text-white">try Unlimited</p>
          </div>
          <div>
            <span className="text-[24px] font-bold text-white">$9.99</span>
            <span className="ml-1 text-[14px] text-white/80">/ Month</span>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full bg-[var(--color-form-bg)] px-8 py-10 md:w-[55%] md:px-10 md:py-12">
        <h2 className="mb-6 text-[24px] font-bold text-[var(--color-heading)]">
          Registration Form
        </h2>

        {submitted ? (
          <div className="rounded-md bg-green-50 p-6 text-center">
            <p className="text-[16px] font-medium text-green-700">
              Registration successful! Welcome aboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="mb-1 block text-[14px] text-[var(--color-label)]"
              >
                Full Name:
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="ex: Lindsey Wilson"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="w-full rounded-[5px] border border-[var(--color-input-border)] px-4 py-[14.5px] text-[14px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-[14px] text-[var(--color-label)]">
                Your Email:
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-[5px] border border-[var(--color-input-border)] px-4 py-[14.5px] text-[14px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
              />
              {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-1 block text-[14px] text-[var(--color-label)]"
              >
                Password:
              </label>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="w-full rounded-[5px] border border-[var(--color-input-border)] px-4 py-[14.5px] text-[14px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
              />
              {errors.password && (
                <p className="mt-1 text-[12px] text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-[14px] text-[var(--color-label)]"
              >
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="w-full rounded-[5px] border border-[var(--color-input-border)] px-4 py-[14.5px] text-[14px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-[12px] text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms checkbox */}
            <div className="mb-6">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => handleChange('terms', e.target.checked)}
                  className="mt-1 shrink-0"
                />
                <span className="text-[13px] text-[var(--color-label)]">
                  By signing up, you agree to the{' '}
                  <a
                    href="https://www.componentdock.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-link)] underline"
                  >
                    Play Term of Service
                  </a>
                </span>
              </label>
              {errors.terms && <p className="mt-1 text-[12px] text-red-500">{errors.terms}</p>}
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-[160px] cursor-pointer rounded-[6px] bg-[var(--color-btn-primary)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--color-btn-primary-hover)]"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

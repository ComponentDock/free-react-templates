import type { FormEvent } from 'react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  password: string
  retypePassword: string
  terms: boolean
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
  retypePassword?: string
  terms?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name) {
    errors.name = 'Name is required'
  }
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format'
  }
  if (!data.password) {
    errors.password = 'Password is required'
  }
  if (!data.retypePassword) {
    errors.retypePassword = 'Please re-type your password'
  } else if (data.password !== data.retypePassword) {
    errors.retypePassword = 'Passwords do not match'
  }
  if (!data.terms) {
    errors.terms = 'You must agree to the terms'
  }
  return errors
}

export function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    terms: true,
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

  if (submitted) {
    return (
      <div className="rounded-md bg-green-50 p-6 text-center">
        <p className="text-[16px] font-medium text-green-700">
          Registration successful! Welcome aboard.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-1 block text-[14px] font-bold text-[var(--color-body-text)]"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g John Smith"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full border border-[var(--color-input-border)] px-3 py-[10px] text-[14px] text-[var(--color-body-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none focus:ring-[0.2rem] focus:ring-blue-200"
        />
        {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-1 block text-[14px] font-bold text-[var(--color-body-text)]"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="your-email@gmail.com"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full border border-[var(--color-input-border)] px-3 py-[10px] text-[14px] text-[var(--color-body-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none focus:ring-[0.2rem] focus:ring-blue-200"
        />
        {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-1 block text-[14px] font-bold text-[var(--color-body-text)]"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Your Password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="w-full border border-[var(--color-input-border)] px-3 py-[10px] text-[14px] text-[var(--color-body-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none focus:ring-[0.2rem] focus:ring-blue-200"
        />
        {errors.password && <p className="mt-1 text-[12px] text-red-500">{errors.password}</p>}
      </div>

      {/* Re-type Password */}
      <div className="mb-4">
        <label
          htmlFor="retypePassword"
          className="mb-1 block text-[14px] font-bold text-[var(--color-body-text)]"
        >
          Re-type Password
        </label>
        <input
          id="retypePassword"
          type="password"
          placeholder="Re-Type Your Password"
          value={formData.retypePassword}
          onChange={(e) => handleChange('retypePassword', e.target.value)}
          className="w-full border border-[var(--color-input-border)] px-3 py-[10px] text-[14px] text-[var(--color-body-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none focus:ring-[0.2rem] focus:ring-blue-200"
        />
        {errors.retypePassword && (
          <p className="mt-1 text-[12px] text-red-500">{errors.retypePassword}</p>
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
          <span className="text-[14px] text-[var(--color-caption)]">
            Creating an account means you're okay with our{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-link)] hover:text-[var(--color-link-hover)]"
            >
              Terms and Conditions
            </a>{' '}
            and our{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-link)] hover:text-[var(--color-link-hover)]"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.terms && <p className="mt-1 text-[12px] text-red-500">{errors.terms}</p>}
      </div>

      {/* Register button */}
      <button
        type="submit"
        className="w-full cursor-pointer border-none bg-[var(--color-primary)] py-[14px] text-[16px] text-white transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        Register
      </button>
    </form>
  )
}

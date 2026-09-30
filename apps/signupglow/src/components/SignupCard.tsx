import { useState, type FormEvent } from 'react'

interface Field {
  id: string
  label: string
  type: string
  placeholder: string
}

const fields: Field[] = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { id: 'email', label: 'Email Address', type: 'text', placeholder: 'johndoe@gmail.com' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
  {
    id: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm Password',
  },
]

export function SignupCard() {
  const [values, setValues] = useState<Record<string, string>>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[id]
        return next
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!values.fullName?.trim()) newErrors.fullName = 'Full Name is required'
    if (!values.email?.trim()) newErrors.email = 'Email Address is required'
    if (!values.password?.trim()) newErrors.password = 'Password is required'
    if (!values.confirmPassword?.trim()) newErrors.confirmPassword = 'Confirm Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    validate()
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-[480px]">
        <h1 className="mb-8 text-center text-2xl font-medium text-text">Sign Up #01</h1>

        <div className="rounded-xl bg-surface p-10 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
          {/* Heading */}
          <h2 className="mb-1 text-2xl font-bold text-text">Hello!</h2>
          <p className="mb-6 text-sm text-muted">Please signup to continue</p>

          {/* Avatar */}
          <div className="mb-8 flex justify-start">
            <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-avatar-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-badge-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5 text-white"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
              <div key={field.id} className="mb-6">
                <label htmlFor={field.id} className="mb-1 block text-xs font-medium text-muted">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={values[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-text placeholder-muted outline-none transition-colors focus:border-golden-400"
                />
                {errors[field.id] && (
                  <p className="mt-1 text-xs text-red-500">{errors[field.id]}</p>
                )}
              </div>
            ))}

            {/* Submit */}
            <button
              type="submit"
              className="mb-4 h-12 w-full rounded-md bg-golden-400 text-sm font-medium text-white transition-colors hover:bg-golden-500"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <p className="mb-2 text-center text-sm text-muted">or</p>
          <p className="mb-4 text-center text-sm text-muted">Signup with</p>

          {/* Social icons */}
          <div className="mb-6 flex justify-center gap-3">
            <a
              href="#"
              aria-label="Sign up with Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-fb-blue text-white transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Sign up with Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-tw-blue text-white transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>

          {/* Login redirect */}
          <p className="text-center text-sm text-muted">
            I'm already a member!{' '}
            <a
              href="#"
              className="font-medium text-golden-400 underline transition-colors hover:text-golden-500"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

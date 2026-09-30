import { useState, type FormEvent } from 'react'
import { Eye, EyeOff } from 'lucide-react'

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
]

export function SignupCard() {
  const [values, setValues] = useState<Record<string, string>>({
    fullName: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
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
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-mint-400">
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
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="mb-8 text-center text-xl font-normal text-text">Create Your Account</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
              <div key={field.id} className="mb-5">
                <label
                  htmlFor={field.id}
                  className="mb-1 block text-xs font-bold uppercase tracking-wide text-mint-400"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    id={field.id}
                    type={field.id === 'password' && showPassword ? 'text' : field.type}
                    value={values[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded border border-border bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition-colors focus:border-mint-400"
                  />
                  {field.id === 'password' && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-text"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  )}
                </div>
                {errors[field.id] && (
                  <p className="mt-1 text-xs text-red-500">{errors[field.id]}</p>
                )}
              </div>
            ))}

            {/* Checkbox */}
            <div className="mb-6">
              <label className="flex cursor-pointer items-start gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-0.5 h-4 w-4 rounded border-border accent-mint-400"
                />
                <span>
                  I Agree All Statements In{' '}
                  <a href="#" className="text-mint-400 underline hover:text-mint-500">
                    Terms Of Service
                  </a>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mb-4 h-12 w-full rounded-md bg-mint-400 text-sm font-medium text-white transition-colors hover:bg-mint-500"
            >
              Sign Up
            </button>

            {/* Login redirect */}
            <p className="text-center text-sm text-muted">
              I'm already a member!{' '}
              <a href="#" className="text-mint-400 underline hover:text-mint-500">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

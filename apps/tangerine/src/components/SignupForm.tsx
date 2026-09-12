import { type FormEvent, useState } from 'react'
import { Check } from 'lucide-react'

interface SignupFormProps {
  onSubmit?: (data: { email: string; password: string; agreedToTerms: boolean }) => void
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    onSubmit?.({ email, password, agreedToTerms })
  }

  if (submitted) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-[400px] rounded bg-white p-10 text-center shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Registration Complete</h2>
          <p className="mb-6 font-light text-text-muted">
            Your account has been created successfully.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setEmail('')
              setPassword('')
              setRetypePassword('')
              setAgreedToTerms(true)
            }}
            className="h-[54px] w-full cursor-pointer rounded-[4px] border-none bg-brand text-sm font-medium text-white transition-colors hover:bg-brand-hover active:bg-brand-active"
          >
            Back to form
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-[400px] rounded bg-white p-10 shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
        <h2 className="mb-5 text-center text-[1.75rem] font-bold text-gray-900">Sign Up</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm font-light text-text-muted">
              Your Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="your-email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[54px] w-full rounded-[4px] border-none bg-input-bg px-4 text-sm font-light text-gray-900 placeholder:text-text-muted focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="mb-1 block text-sm font-light text-text-muted">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[54px] w-full rounded-[4px] border-none bg-input-bg px-4 text-sm font-light text-gray-900 placeholder:text-text-muted focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="retype-password"
              className="mb-1 block text-sm font-light text-text-muted"
            >
              Re-type Password
            </label>
            <input
              id="retype-password"
              type="password"
              placeholder="Your Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              className="h-[54px] w-full rounded-[4px] border-none bg-input-bg px-4 text-sm font-light text-gray-900 placeholder:text-text-muted focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mb-5 flex items-center gap-2">
            <label className="relative flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="peer sr-only"
              />
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-[4px] border-none transition-colors ${
                  agreedToTerms ? 'bg-brand' : 'bg-checkbox-unchecked hover:bg-checkbox-hover'
                }`}
                aria-hidden="true"
              >
                {agreedToTerms && <Check size={14} className="text-white" />}
              </span>
              <span className="text-sm text-text-secondary">
                Agree our{' '}
                <a
                  href="#terms"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="h-[54px] w-full cursor-pointer rounded-[4px] border-none bg-brand text-sm font-medium text-white transition-colors hover:bg-brand-hover active:bg-brand-active"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

import { type FormEvent, useState } from 'react'
import { Check } from 'lucide-react'
import { Footer } from './components/Footer'

interface FieldState {
  value: string
  touched: boolean
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function App() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState<FieldState>({ value: '', touched: false })
  const [username, setUsername] = useState<FieldState>({ value: '', touched: false })
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(true)

  const emailValid = email.touched && isValidEmail(email.value)
  const usernameValid = username.touched && username.value.length > 0

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left panel — photo with gradient overlay */}
        <div className="relative hidden min-h-[300px] w-full md:block md:w-[60%]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://picsum.photos/seed/loginflux-bg/1200/900)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(155,89,182,0.7) 0%, rgba(233,30,140,0.7) 100%)',
            }}
          />
        </div>

        {/* Right panel — form */}
        <div className="flex w-full items-center justify-center bg-white px-6 py-12 md:w-[40%] md:px-10 md:py-0">
          <div className="w-full max-w-[360px]">
            <h1 className="mb-8 text-[28px] font-bold text-[var(--color-heading)]">Sign Up</h1>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-[13px] font-medium text-[var(--color-label)]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border-b border-[var(--color-input-border)] bg-transparent py-2 text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-input-focus)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[13px] font-medium text-[var(--color-label)]"
                >
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="email"
                    type="email"
                    value={email.value}
                    onChange={(e) => setEmail({ value: e.target.value, touched: true })}
                    onBlur={() => setEmail((s) => ({ ...s, touched: true }))}
                    className="min-w-0 flex-1 border-b border-[var(--color-input-border)] bg-transparent py-2 text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-input-focus)]"
                  />
                  {emailValid && (
                    <Check
                      size={18}
                      className="shrink-0 text-[var(--color-checkmark)]"
                      aria-label="Email is valid"
                    />
                  )}
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-1 block text-[13px] font-medium text-[var(--color-label)]"
                >
                  Username
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="username"
                    type="text"
                    value={username.value}
                    onChange={(e) => setUsername({ value: e.target.value, touched: true })}
                    onBlur={() => setUsername((s) => ({ ...s, touched: true }))}
                    className="min-w-0 flex-1 border-b border-[var(--color-input-border)] bg-transparent py-2 text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-input-focus)]"
                  />
                  {usernameValid && (
                    <Check
                      size={18}
                      className="shrink-0 text-[var(--color-checkmark)]"
                      aria-label="Username is valid"
                    />
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-[13px] font-medium text-[var(--color-label)]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-[var(--color-input-border)] bg-transparent py-2 text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-input-focus)]"
                />
              </div>

              {/* Repeat Password */}
              <div>
                <label
                  htmlFor="repeatPassword"
                  className="mb-1 block text-[13px] font-medium text-[var(--color-label)]"
                >
                  Repeat Password
                </label>
                <input
                  id="repeatPassword"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="w-full border-b border-[var(--color-input-border)] bg-transparent py-2 text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-input-focus)]"
                />
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-2 text-[13px] text-[var(--color-body)]">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 accent-[var(--color-brand-start)]"
                />
                <span>
                  I agree to the{' '}
                  <a
                    href="#terms"
                    className="text-[var(--color-brand-start)] underline transition-colors hover:text-[var(--color-brand-end)]"
                  >
                    Terms of User
                  </a>
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-2 w-full cursor-pointer rounded-[25px] bg-gradient-to-r from-[var(--color-brand-start)] to-[var(--color-brand-end)] py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Sign Up
              </button>
            </form>

            {/* Sign-in link */}
            <div className="mt-5 text-right">
              <a
                href="#signin"
                className="inline-flex items-center gap-1 text-[14px] text-[var(--color-link)] transition-colors hover:text-[var(--color-brand-start)]"
              >
                Sign in <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

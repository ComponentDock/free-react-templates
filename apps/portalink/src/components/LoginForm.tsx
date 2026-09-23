import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  return (
    <div className="flex-1 px-8 py-6">
      {/* Header row: Sign In heading + social icons */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[26px] font-medium text-[var(--color-ink)]">Sign In</h1>
        <div className="flex gap-1">
          <a
            href="#facebook"
            aria-label="Login with Facebook"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[var(--color-social-border)] text-[var(--color-social-text)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          >
            <svg
              className="h-[14px] w-[14px]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#twitter"
            aria-label="Login with Twitter"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[var(--color-social-border)] text-[var(--color-social-text)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          >
            <svg
              className="h-[14px] w-[14px]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-3">
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="h-[45px] w-full rounded-[5px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 text-[14px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(0,0,0,0.3)] focus:border-[var(--color-primary)]"
          />
        </div>

        {/* Password */}
        <div className="relative mb-3">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-[45px] w-full rounded-[5px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 pr-10 text-[14px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(0,0,0,0.3)] focus:border-[var(--color-primary)]"
          />
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[var(--color-social-text)] transition-colors hover:text-[var(--color-ink)]"
          >
            {showPassword ? (
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Sign In button */}
        <div className="mb-4">
          <button
            type="submit"
            className="h-[45px] w-full cursor-pointer rounded-[25px] bg-[var(--color-primary)] px-5 text-[15px] font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Remember Me + Forgot Password */}
      <div className="mb-5 flex items-center">
        <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-ink)]">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 accent-[var(--color-primary)]"
          />
          Remember Me
        </label>
        <a
          href="#forgot"
          className="ml-auto text-[13px] text-[var(--color-caption)] transition-colors hover:text-[var(--color-primary)]"
        >
          Forgot Password
        </a>
      </div>

      {/* Sign Up CTA */}
      <p className="text-center text-[13px] text-[var(--color-caption)]">
        Not a member?{' '}
        <a
          href="#signup"
          className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Sign Up
        </a>
      </p>
    </div>
  )
}

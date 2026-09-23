import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginCard() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [savePassword, setSavePassword] = useState(true)

  return (
    <div className="w-full max-w-[520px] rounded-[5px] bg-white px-8 py-10 shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)]">
      {/* Header: Sign In + social icons */}
      <div className="mb-6 flex">
        <h3 className="w-full text-[22px] font-light text-[var(--color-text-heading)]">Sign In</h3>
        <div className="flex w-full justify-end gap-1">
          <a
            href="#facebook"
            aria-label="Login with Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-social-border)] transition-colors hover:bg-[var(--color-brand)]"
          >
            <svg
              className="h-4 w-4 text-[var(--color-text-gray)] hover:text-white"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-social-border)] transition-colors hover:bg-[var(--color-brand)]"
          >
            <svg
              className="h-4 w-4 text-[var(--color-text-gray)] hover:text-white"
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
        {/* Username with icon */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-l-[5px] bg-[var(--color-icon-bg)]">
            <svg
              className="h-5 w-5 text-[var(--color-icon-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12 w-full rounded-[5px] border border-[var(--color-border-input)] bg-white pl-[60px] text-base text-black outline-none focus:border-[var(--color-brand)]"
          />
        </div>

        {/* Password with icon */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-l-[5px] bg-[var(--color-icon-bg)]">
            <svg
              className="h-5 w-5 text-[var(--color-icon-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-full rounded-[5px] border border-[var(--color-border-input)] bg-white pl-[60px] text-base text-black outline-none focus:border-[var(--color-brand)]"
          />
        </div>

        {/* Save Password + Login */}
        <div className="mb-4 flex items-center">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[var(--color-text-body)]">
            <input
              type="checkbox"
              checked={savePassword}
              onChange={(e) => setSavePassword(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-brand)]"
            />
            Save Password
          </label>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="cursor-pointer rounded-[5px] border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-transparent hover:text-[var(--color-brand)]"
            >
              Login
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-4 text-center">
          <p className="mb-1 text-sm text-[var(--color-text-body)]">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-[var(--color-brand)] hover:underline">
              Sign Up
            </a>
          </p>
          <p>
            <a href="#" className="text-sm text-[var(--color-brand)] hover:underline">
              Forgot Password
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

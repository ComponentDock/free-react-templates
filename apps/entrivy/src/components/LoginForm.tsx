import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const hasUsername = username.length > 0
  const hasPassword = password.length > 0

  return (
    <div className="flex items-center justify-center px-4 py-16 lg:h-full lg:px-12 lg:py-0">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-2xl font-bold text-[var(--color-ink)]">Sign In</h1>
        <p className="mb-8 text-sm text-[var(--color-caption)]">
          Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div
            className={`relative mb-0 border-b border-[var(--color-field-border)] ${
              hasUsername ? 'bg-white' : 'bg-[var(--color-field)]'
            } rounded-t-[7px] px-[15px] py-[15px]`}
          >
            <label
              htmlFor="username"
              className={`pointer-events-none absolute left-[15px] block text-xs text-[var(--color-caption)] transition-all ${
                hasUsername ? 'top-2 text-[10px]' : 'top-1/2 -translate-y-1/2'
              }`}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-none bg-transparent pt-3 text-base text-[var(--color-ink)] outline-none"
            />
          </div>

          {/* Password */}
          <div
            className={`relative mb-4 border-b border-[var(--color-field-border)] ${
              hasPassword ? 'bg-white' : 'bg-[var(--color-field)]'
            } rounded-b-[7px] px-[15px] py-[15px]`}
          >
            <label
              htmlFor="password"
              className={`pointer-events-none absolute left-[15px] block text-xs text-[var(--color-caption)] transition-all ${
                hasPassword ? 'top-2 text-[10px]' : 'top-1/2 -translate-y-1/2'
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-none bg-transparent pt-3 text-base text-[var(--color-ink)] outline-none"
            />
          </div>

          {/* Remember me + Forgot Password */}
          <div className="mb-5 flex items-center">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-link)]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-5 w-5 accent-[var(--color-brand)]"
              />
              Remember me
            </label>
            <a
              href="#forgot"
              className="ml-auto text-sm text-[var(--color-link)] underline transition-colors hover:text-[var(--color-brand)]"
            >
              Forgot Password
            </a>
          </div>

          {/* Log In */}
          <button
            type="submit"
            className="h-[54px] w-full cursor-pointer rounded bg-[var(--color-brand)] px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[var(--color-brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-left text-sm text-[var(--color-caption)]">— or login with —</div>

        {/* Social login buttons (circular icons) */}
        <div className="flex gap-3">
          <a
            href="#facebook"
            aria-label="Login with Facebook"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--color-fb)] text-white transition-colors hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href="#twitter"
            aria-label="Login with Twitter"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--color-twitter)] text-white transition-colors hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>

          <a
            href="#google"
            aria-label="Login with Google"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--color-google)] text-white transition-colors hover:opacity-90"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

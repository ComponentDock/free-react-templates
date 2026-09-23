import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginCard() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  return (
    <div className="flex items-center justify-center px-4 py-20 lg:h-full lg:px-10 lg:py-0">
      <div className="w-full max-w-[400px] rounded bg-[var(--color-card)] p-[40px] shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] lg:p-10">
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="mb-6 text-center text-lg font-medium text-[var(--color-ink)]">
            Login to <strong>Passgate</strong>
          </h3>

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="mb-1 block text-sm text-[var(--color-ink)]">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="your-email@gmail.com"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-[54px] w-full rounded border-none bg-[var(--color-input)] px-4 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="mb-1 block text-sm text-[var(--color-ink)]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[54px] w-full rounded border-none bg-[var(--color-input)] px-4 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none"
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="mb-6 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-caption)]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-[var(--color-brand)]"
              />
              Remember me
            </label>
            <a href="#forgot" className="text-sm text-[var(--color-caption)] underline">
              Forgot Password
            </a>
          </div>

          {/* Log In button */}
          <button
            type="submit"
            className="h-[54px] w-full cursor-pointer rounded bg-[var(--color-brand)] text-sm font-medium uppercase tracking-wide text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

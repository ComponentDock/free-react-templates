import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Left panel — form */}
      <div className="flex w-full flex-col justify-center bg-[var(--color-card)] p-8 sm:w-1/2 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <h1 className="mb-2 text-3xl font-semibold text-[var(--color-ink)]">Login to Portico</h1>
          <p className="mb-8 text-sm text-[var(--color-muted)]">
            Welcome back! Please enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-1 block text-xs font-medium text-[var(--color-placeholder)]"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none transition-colors focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-1 block text-xs font-medium text-[var(--color-placeholder)]"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none transition-colors focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-brand)]"
                />
                Remember me
              </label>
              <a
                href="#forgot"
                className="text-sm text-[var(--color-brand)] transition-colors hover:underline"
              >
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded bg-[var(--color-brand)] px-4 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      {/* Right panel — image */}
      <div
        className="hidden w-1/2 bg-cover bg-center sm:block"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/portico-city/1200/900)',
        }}
        role="img"
        aria-label="City street scene"
      />
    </div>
  )
}

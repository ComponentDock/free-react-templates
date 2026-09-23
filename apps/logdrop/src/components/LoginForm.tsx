import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <h2 className="mb-6 text-center text-xl font-medium text-[var(--color-ink)]">Sign In</h2>

      {/* Username */}
      <div className="mb-4">
        <input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full rounded border border-[var(--color-input-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-caption)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded border border-[var(--color-input-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-caption)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
        />
      </div>

      {/* Remember me + Forgot Password */}
      <div className="mb-6 flex items-center">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-ink)]">
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
          className="ml-auto text-sm text-[var(--color-link)] transition-colors hover:underline"
        >
          Forgot Password
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full cursor-pointer rounded bg-[var(--color-primary)] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
      >
        Login
      </button>
    </form>
  )
}

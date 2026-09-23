import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-brand)] p-4">
      <div className="w-full max-w-sm rounded-sm bg-[var(--color-card)] p-8 shadow-lg">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-placeholder)] outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-[var(--color-brand)] px-4 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-[var(--color-placeholder)]">
          Not registered?{' '}
          <a
            href="#register"
            className="text-[var(--color-brand)] underline transition-colors hover:opacity-80"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}

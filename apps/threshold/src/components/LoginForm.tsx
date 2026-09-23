import { type FormEvent, useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="mx-auto w-full max-w-md">
      <h3 className="mb-2 text-2xl font-normal text-[var(--color-ink)]">Welcome Back</h3>
      <p className="mb-8 text-sm text-[var(--color-paragraph)]">
        Please enter your credentials to access your account.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="mb-1 block text-xs font-medium text-[var(--color-placeholder)]"
          >
            Username
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-placeholder)]" />
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={cn(
                'w-full rounded-[4px] border border-[var(--color-border)] bg-white py-3 pl-10 pr-4 text-sm text-[var(--color-ink)]',
                'placeholder-[var(--color-placeholder)] outline-none transition-colors',
                'focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]',
                'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
              )}
              style={{ height: '54px' }}
              placeholder="Enter your username"
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-medium text-[var(--color-placeholder)]"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-placeholder)]" />
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={cn(
                'w-full rounded-[4px] border border-[var(--color-border)] bg-white py-3 pl-10 pr-4 text-sm text-[var(--color-ink)]',
                'placeholder-[var(--color-placeholder)] outline-none transition-colors',
                'focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]',
                'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
              )}
              style={{ height: '54px' }}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-checkbox)]"
            />
            Remember me
          </label>
          <a
            href="#forgot"
            className="text-sm text-[var(--color-link)] transition-colors hover:underline"
          >
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-[4px] bg-[var(--color-brand)] px-4 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
          style={{ height: '54px' }}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

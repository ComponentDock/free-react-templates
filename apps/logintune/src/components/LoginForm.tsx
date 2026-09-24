import type { FormEvent } from 'react'

interface LoginFormProps {
  username: string
  password: string
  onUsernameChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function LoginForm({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <div className="w-full max-w-[380px] rounded bg-[var(--color-bg-card)] px-8 py-10 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <form onSubmit={onSubmit} noValidate>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            className="h-12 w-full rounded bg-[var(--color-bg-input)] px-4 text-[15px] text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="h-12 w-full rounded bg-[var(--color-bg-input)] px-4 text-[15px] text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
          />
        </div>

        <button
          type="submit"
          className="h-12 w-full cursor-pointer rounded border-none bg-[var(--color-brand)] text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-brand-hover)]"
        >
          Login
        </button>
      </form>

      <div className="mt-5 text-center text-[14px]">
        <span className="text-[var(--color-text-muted)]">Not registered? </span>
        <a href="#" className="text-[var(--color-text-link)] transition-colors hover:underline">
          Create an account
        </a>
      </div>
    </div>
  )
}

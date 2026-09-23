import { type FormEvent, useState } from 'react'
import { User, Lock } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Username */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute left-0 top-0 flex h-[48px] w-[48px] items-center justify-center text-[var(--color-caption)]">
          <User size={18} />
        </div>
        <input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="h-[48px] w-full rounded-[5px] border border-[var(--color-border)] bg-transparent pl-[48px] pr-3 text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(255,255,255,0.3)] focus:border-[var(--color-primary)]"
        />
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute left-0 top-0 flex h-[48px] w-[48px] items-center justify-center text-[var(--color-caption)]">
          <Lock size={18} />
        </div>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="h-[48px] w-full rounded-[5px] border border-[var(--color-border)] bg-transparent pl-[48px] pr-3 text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(255,255,255,0.3)] focus:border-[var(--color-primary)]"
        />
      </div>

      {/* Forgot Password */}
      <div className="mb-4 text-right">
        <a
          href="#forgot"
          className="text-[14px] text-[var(--color-caption)] transition-colors hover:text-[var(--color-ink)]"
        >
          Forgot Password
        </a>
      </div>

      {/* Get Started button */}
      <div className="mb-6">
        <button
          type="submit"
          className="h-[48px] w-full cursor-pointer rounded-[5px] border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 text-[15px] font-medium text-white transition-all hover:border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-card)]"
        >
          Get Started
        </button>
      </div>

      {/* Sign Up CTA */}
      <p className="text-center text-[14px] text-[var(--color-caption)]">
        Don&apos;t have an account?{' '}
        <a
          href="#signup"
          className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Sign Up
        </a>
      </p>
    </form>
  )
}

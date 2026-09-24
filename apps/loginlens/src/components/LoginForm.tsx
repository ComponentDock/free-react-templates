import { type FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { SocialLoginButtons } from './SocialLoginButtons'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="w-full max-w-[480px]">
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-8 text-center font-[family-name:var(--font-poppins)] text-[32px] font-bold text-[var(--color-heading)]">
          Login
        </h1>

        <SocialLoginButtons />

        <h2 className="mb-6 mt-8 text-center font-[family-name:var(--font-poppins)] text-[18px] font-semibold text-[var(--color-heading)]">
          Login with email
        </h2>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[52px] w-full rounded-full border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-6 font-[family-name:var(--font-poppins)] text-[15px] text-[var(--color-heading)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-btn-dark)]"
          />
        </div>

        <div className="relative mb-6">
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[52px] w-full rounded-full border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-6 pr-12 font-[family-name:var(--font-poppins)] text-[15px] text-[var(--color-heading)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-btn-dark)]"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-heading)]"
            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
          >
            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="h-[52px] w-full cursor-pointer rounded-full border-0 bg-[var(--color-btn-dark)] font-[family-name:var(--font-poppins)] text-[15px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-btn-dark-hover)]"
        >
          Login
        </button>
      </form>

      <div className="mt-12 text-center">
        <p className="mb-2 font-[family-name:var(--font-poppins)] text-[14px] text-[var(--color-text-muted)]">
          Don&apos;t have an account?
        </p>
        <a
          href="#"
          className="font-[family-name:var(--font-poppins)] text-[14px] font-semibold uppercase tracking-wider text-[var(--color-signup-link)] underline transition-colors hover:text-[var(--color-btn-dark)]"
        >
          Sign up now
        </a>
      </div>
    </div>
  )
}

import { type FormEvent, useState } from 'react'
import { Mail, Lock } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col">
      {/* Title */}
      <span className="mb-8 block text-center font-[var(--font-heading)] text-[30px] font-black uppercase leading-tight text-[var(--color-ink)]">
        Login
      </span>

      {/* Email input */}
      <div className="relative mb-4">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="h-[62px] w-full rounded-[3px] bg-[var(--color-input-bg)] py-0 pr-[30px] pl-[65px] text-[18px] font-semibold text-[var(--color-input-text)] outline-none placeholder:text-[var(--color-placeholder)] focus:shadow-[0_0_60px_20px_rgba(211,63,141,0.3)] transition-shadow"
        />
        <Mail
          className="pointer-events-none absolute left-[23px] top-1/2 -translate-y-1/2 text-[var(--color-caption)] transition-colors peer-focus:text-[var(--color-primary)]"
          size={24}
          aria-hidden="true"
        />
      </div>

      {/* Password input */}
      <div className="relative mb-4">
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="h-[62px] w-full rounded-[3px] bg-[var(--color-input-bg)] py-0 pr-[30px] pl-[65px] text-[18px] font-semibold text-[var(--color-input-text)] outline-none placeholder:text-[var(--color-placeholder)] focus:shadow-[0_0_60px_20px_rgba(211,63,141,0.3)] transition-shadow"
        />
        <Lock
          className="pointer-events-none absolute left-[23px] top-1/2 -translate-y-1/2 text-[var(--color-caption)] transition-colors peer-focus:text-[var(--color-primary)]"
          size={24}
          aria-hidden="true"
        />
      </div>

      {/* Remember me */}
      <div className="mb-6 ml-1">
        <label className="flex cursor-pointer items-center gap-2 font-[var(--font-heading)] text-[16px] text-[var(--color-caption)]">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-[18px] w-[18px] accent-[var(--color-primary)]"
          />
          Remember me
        </label>
      </div>

      {/* Login button */}
      <div className="mb-8 flex justify-center">
        <button
          type="submit"
          className="flex h-[62px] w-full cursor-pointer items-center justify-center rounded-[3px] bg-[var(--color-primary)] px-[25px] font-[var(--font-heading)] text-[16px] font-bold uppercase text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Login
        </button>
      </div>

      {/* Or login with */}
      <div className="mb-5 text-center">
        <span className="font-[var(--font-heading)] text-[16px] text-[var(--color-caption)]">
          Or login with
        </span>
      </div>

      {/* Social buttons */}
      <div className="mb-4 flex gap-[10px]">
        <a
          href="#facebook"
          className="flex h-[40px] flex-1 items-center justify-center rounded-[3px] border border-[var(--color-social-border)] bg-white font-[var(--font-heading)] text-[16px] font-bold text-[var(--color-facebook)] transition-colors hover:border-[var(--color-primary)]"
          aria-label="Login with Facebook"
        >
          <svg
            className="mr-[10px] h-[20px] w-[20px]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>

        <a
          href="#google"
          className="flex h-[40px] flex-1 items-center justify-center rounded-[3px] border border-[var(--color-social-border)] bg-white font-[var(--font-heading)] text-[16px] font-bold text-[var(--color-google)] transition-colors hover:border-[var(--color-primary)]"
          aria-label="Login with Google"
        >
          <svg className="mr-[10px] h-[19px] w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </a>
      </div>

      {/* Not a member */}
      <div className="mt-[115px] text-center">
        <span className="font-[var(--font-heading)] text-[16px] text-[var(--color-caption)]">
          Not a member?{' '}
        </span>
        <a
          href="#signup"
          className="font-[var(--font-heading)] text-[16px] text-[var(--color-caption)] underline transition-colors hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
        >
          Sign up now
        </a>
      </div>
    </form>
  )
}

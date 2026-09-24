import { useState, type FormEvent } from 'react'
import { SocialButton } from './SocialButton'
import { FacebookIcon, GoogleIcon } from './SocialIcons'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="mb-[53px] w-full text-center font-montserrat text-[39px] font-medium text-[var(--color-text-heading)]">
        Sign In With
      </h1>

      {/* Social buttons */}
      <div className="mb-5 flex gap-5 max-sm:flex-col max-sm:items-stretch">
        <SocialButton label="Facebook" icon={<FacebookIcon />} variant="facebook" />
        <SocialButton label="Google" icon={<GoogleIcon />} variant="google" />
      </div>

      {/* Username */}
      <div className="mt-[31px] mb-[9px]">
        <label
          htmlFor="username"
          className="font-montserrat text-[16px] font-semibold text-[var(--color-text-label)]"
        >
          Username
        </label>
      </div>
      <div className="relative">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="h-[60px] w-full rounded-[10px] border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-5 font-poppins text-[18px] text-[var(--color-text-input)] outline-none placeholder:text-[var(--color-text-placeholder)] focus:border-[var(--color-focus-border)]"
        />
        <span className="pointer-events-none absolute inset-0 rounded-[10px] border-2 border-[var(--color-focus-border)] opacity-0 scale-x-[1.1] scale-y-[1.3] transition-all duration-300 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:scale-x-100 focus-within:scale-y-100" />
      </div>

      {/* Password */}
      <div className="mt-[13px] mb-[9px] flex items-center justify-between">
        <label
          htmlFor="password"
          className="font-montserrat text-[16px] font-semibold text-[var(--color-text-label)]"
        >
          Password
        </label>
        <a
          href="#forgot"
          className="border-b border-[var(--color-text-muted)] font-poppins text-[14px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-brand-magenta)]"
        >
          Forgot?
        </a>
      </div>
      <div className="relative">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="h-[60px] w-full rounded-[10px] border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-5 font-poppins text-[18px] text-[var(--color-text-input)] outline-none placeholder:text-[var(--color-text-placeholder)] focus:border-[var(--color-focus-border)]"
        />
        <span className="pointer-events-none absolute inset-0 rounded-[10px] border-2 border-[var(--color-focus-border)] opacity-0 scale-x-[1.1] scale-y-[1.3] transition-all duration-300 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:scale-x-100 focus-within:scale-y-100" />
      </div>

      {/* Sign In button */}
      <button
        type="submit"
        className="group/btn relative mt-[17px] h-[60px] w-full cursor-pointer overflow-hidden rounded-[10px] bg-[var(--color-button-bg)] font-poppins text-[16px] font-medium text-[var(--color-button-text)] transition-all"
      >
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover/btn:opacity-100"
          style={{
            background:
              'linear-gradient(45deg, var(--color-brand-cyan), var(--color-brand-magenta))',
          }}
        />
        <span className="relative z-10">Sign In</span>
      </button>

      {/* Sign up */}
      <div className="mt-[55px] w-full text-center">
        <span className="font-poppins text-[14px] text-[var(--color-text-muted)]">
          Not a member?{' '}
        </span>
        <a
          href="#signup"
          className="border-b border-[var(--color-text-muted)] font-poppins text-[14px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-brand-magenta)]"
        >
          Sign up now
        </a>
      </div>
    </form>
  )
}

import { type FormEvent, useState } from 'react'
import { SocialButtons } from './SocialButtons'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginCard() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="w-full max-w-sm">
      <h2 className="mb-8 text-center text-xl font-light text-white">Sign In</h2>

      <form onSubmit={handleSubmit} noValidate className="w-full">
        {/* Username */}
        <div className="mb-5">
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full border-b border-[var(--color-input-border)] bg-transparent py-3 text-white outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)]"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-b border-[var(--color-input-border)] bg-transparent py-3 text-white outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)]"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mb-5 w-full cursor-pointer rounded-[40px] border border-[var(--color-brand-yellow)] bg-[var(--color-brand-yellow)] px-8 py-3 text-sm font-bold tracking-wide text-black transition-all hover:bg-transparent hover:text-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)]"
        >
          Sign In
        </button>

        {/* Remember Me + Forgot Password */}
        <div className="mb-6 flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-brand-yellow)]"
            />
            Remember Me
          </label>
          <a
            href="#forgot"
            className="text-sm text-[var(--color-brand-yellow)] transition-colors hover:underline"
          >
            Forgot Password
          </a>
        </div>

        {/* Divider */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-sm text-white/70">Or Sign In With</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Social buttons */}
        <SocialButtons />
      </form>
    </div>
  )
}

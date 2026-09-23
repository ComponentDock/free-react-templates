import { type FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Username */}
      <div className="mb-4">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="h-[50px] w-full rounded-full border border-transparent bg-[var(--color-glass)] px-5 text-[15px] text-[var(--color-ink)] placeholder:text-[rgba(255,255,255,0.8)] focus:border-[var(--color-glass-border)] focus:outline-none"
        />
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="h-[50px] w-full rounded-full border border-transparent bg-[var(--color-glass)] px-5 pr-12 text-[15px] text-[var(--color-ink)] placeholder:text-[rgba(255,255,255,0.8)] focus:border-[var(--color-glass-border)] focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-caption)]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Submit button */}
      <div className="mb-4">
        <button
          type="submit"
          className="h-[50px] w-full cursor-pointer rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 text-[15px] font-medium uppercase text-black transition-all hover:bg-transparent hover:text-[var(--color-primary)]"
        >
          Sign In
        </button>
      </div>

      {/* Remember Me + Forgot Password */}
      <div className="mb-4 flex items-center justify-between">
        <label className="flex items-center gap-2 text-[14px] text-[var(--color-caption)]">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 accent-[var(--color-primary)]"
          />
          Remember Me
        </label>
        <a
          href="#forgot"
          className="text-[14px] text-[var(--color-primary)] transition-colors hover:text-[var(--color-ink)]"
        >
          Forgot Password
        </a>
      </div>
    </form>
  )
}

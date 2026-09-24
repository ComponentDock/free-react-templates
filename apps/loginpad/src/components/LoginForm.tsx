import { type FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <h1 className="mb-8 w-full text-left text-[30px] font-medium uppercase text-[var(--color-ink)]">
        Account Login
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-[13px] font-semibold uppercase text-[var(--color-ink)]"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-[55px] w-full rounded-[2px] border border-[var(--color-border)] bg-transparent px-6 text-[18px] font-medium text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:scale-[1.02]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-[13px] font-semibold uppercase text-[var(--color-ink)]"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[55px] w-full rounded-[2px] border border-[var(--color-border)] bg-transparent px-6 pr-12 text-[18px] font-medium text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:scale-[1.02]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="h-[18px] w-[18px]" />
              ) : (
                <Eye className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="mb-8 flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-muted)]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-accent)]"
            />
            Remember me
          </label>
          <a
            href="#forgot"
            className="text-[13px] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="h-[55px] w-full cursor-pointer rounded-[27px] bg-[var(--color-button)] px-5 text-[16px] font-bold uppercase text-[var(--color-button-text)] transition-all duration-300 hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  )
}

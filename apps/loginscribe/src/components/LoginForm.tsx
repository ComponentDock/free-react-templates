import { type FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col items-center">
      {/* Welcome heading */}
      <h1 className="mb-6 text-3xl font-bold text-[var(--color-heading)]">Welcome</h1>

      {/* Avatar icon */}
      <div
        className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-avatar)] text-xl font-semibold text-white"
        role="img"
        aria-label="User avatar"
      >
        A
      </div>

      <form onSubmit={handleSubmit} className="w-full" noValidate>
        {/* Email field */}
        <div className="mb-6">
          <label htmlFor="email" className="mb-1 block text-sm text-[var(--color-caption)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@example.com"
            className="w-full border-b-2 border-[var(--color-border)] bg-transparent pb-2 pt-1 text-base text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-caption)] focus:border-[var(--color-primary-start)]"
          />
          {/* Gradient underline accent */}
          <div
            className="mt-[-2px] h-[2px] w-full"
            style={{
              background:
                'linear-gradient(90deg, var(--color-primary-start), var(--color-primary-end))',
            }}
          />
        </div>

        {/* Password field */}
        <div className="mb-8">
          <label htmlFor="password" className="mb-1 block text-sm text-[var(--color-caption)]">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border-b-2 border-[var(--color-border)] bg-transparent pb-2 pt-1 pr-10 text-base text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-caption)] focus:border-[var(--color-primary-start)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-caption)] transition-colors hover:text-[var(--color-ink)]"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-start)] focus:ring-offset-2"
        >
          LOGIN
        </button>
      </form>
    </div>
  )
}

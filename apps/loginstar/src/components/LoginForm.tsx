import { type FormEvent, useState } from 'react'

interface ValidationErrors {
  username?: string
  password?: string
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})

  function validate(): ValidationErrors {
    const e: ValidationErrors = {}
    if (!username.trim()) e.username = 'Username is required'
    if (!password) e.password = 'Password is required'
    return e
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Username */}
      <div className="mb-4">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (errors.username) setErrors((prev) => ({ ...prev, username: undefined }))
          }}
          placeholder="Username"
          className="h-[62px] w-full rounded-[3px] bg-[var(--color-brand-input-bg)] px-4 text-[18px] font-bold text-[var(--color-brand-heading)] placeholder:text-[18px] placeholder:font-normal placeholder:text-[var(--color-brand-placeholder)] focus:border-2 focus:border-[var(--color-brand-primary)] focus:outline-none"
        />
        {errors.username && (
          <p className="mt-1 text-sm text-[var(--color-brand-error)]">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
          }}
          placeholder="Password"
          className="h-[62px] w-full rounded-[3px] bg-[var(--color-brand-input-bg)] px-4 text-[18px] font-bold text-[var(--color-brand-heading)] placeholder:text-[18px] placeholder:font-normal placeholder:text-[var(--color-brand-placeholder)] focus:border-2 focus:border-[var(--color-brand-primary)] focus:outline-none"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-[var(--color-brand-error)]">{errors.password}</p>
        )}
      </div>

      {/* Remember me + Forgot */}
      <div className="mb-6 flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--color-brand-muted)]">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-[18px] w-[18px] cursor-pointer accent-[var(--color-brand-primary)]"
          />
          Remember me
        </label>
        <a
          href="#forgot"
          className="text-[16px] text-[var(--color-brand-primary)] transition-colors hover:text-[var(--color-brand-heading)]"
        >
          Forgot?
        </a>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="h-[62px] w-full cursor-pointer rounded-[3px] bg-[var(--color-brand-primary)] px-5 text-[16px] font-bold uppercase text-white transition-colors duration-400 hover:bg-[var(--color-brand-heading)]"
      >
        Login
      </button>
    </form>
  )
}

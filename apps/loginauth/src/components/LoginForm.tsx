import { type FormEvent, useState } from 'react'

interface LoginFormErrors {
  username?: string
  password?: string
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<LoginFormErrors>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: LoginFormErrors = {}
    if (!username.trim()) next.username = 'Username is required'
    if (!password) next.password = 'Password is required'
    setErrors(next)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Username */}
      <div className="mb-6">
        <label htmlFor="username" className="mb-1 block text-[15px] text-[var(--color-label)]">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="h-[45px] w-full border-0 border-b border-gray-300 bg-transparent text-[15px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-0"
        />
        {errors.username && <p className="mt-1 text-[13px] text-red-500">{errors.username}</p>}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label htmlFor="password" className="mb-1 block text-[15px] text-[var(--color-label)]">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="h-[45px] w-full border-0 border-b border-gray-300 bg-transparent text-[15px] text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-0"
        />
        {errors.password && <p className="mt-1 text-[13px] text-red-500">{errors.password}</p>}
      </div>

      {/* Remember me + Forgot password */}
      <div className="mb-8 flex items-center justify-between">
        <label className="flex items-center gap-2 text-[14px] text-[var(--color-placeholder)]">
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
          className="text-[14px] text-[var(--color-placeholder)] transition-colors hover:text-[var(--color-accent)]"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login button */}
      <button
        type="submit"
        className="h-[50px] w-full cursor-pointer rounded-[25px] bg-[var(--color-accent)] text-[16px] font-medium text-white transition-colors duration-300 hover:bg-[var(--color-accent-hover)]"
      >
        Login
      </button>
    </form>
  )
}

import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <div className="mx-auto w-full max-w-[380px] rounded-2xl bg-gradient-to-br from-[var(--color-card-start)] to-[var(--color-card-end)] p-10 shadow-2xl sm:p-12">
      {/* Logo icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/90">
        <svg
          className="h-10 w-10 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
          />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide text-white uppercase">
        Log In
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-5 flex items-center border-b border-[var(--color-input-border)] pb-2">
          <svg
            className="mr-3 h-5 w-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/50"
          />
        </div>

        {/* Password */}
        <div className="mb-5 flex items-center border-b border-[var(--color-input-border)] pb-2">
          <svg
            className="mr-3 h-5 w-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/50"
          />
        </div>

        {/* Remember me */}
        <div className="mb-6 flex items-center">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded accent-[var(--color-accent)]"
            />
            Remember me
          </label>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="mb-6 w-full cursor-pointer rounded-full bg-white py-3 text-sm font-medium tracking-wide text-gray-800 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Login
        </button>
      </form>

      {/* Forgot Password */}
      <div className="text-center">
        <a href="#forgot" className="text-sm text-white/70 transition-colors hover:text-white">
          Forgot Password?
        </a>
      </div>
    </div>
  )
}

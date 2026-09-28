import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="flex w-full max-w-[910px] flex-col overflow-hidden rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] md:flex-row">
      {/* Left panel — hero image + overlay text */}
      <div className="relative hidden w-full md:block md:w-[45%]">
        <img
          src="https://picsum.photos/seed/regvibe/500/600"
          alt="Sign up illustration"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
          <h1 className="text-4xl font-bold text-white">Sign Up</h1>
          <div className="text-center">
            <p className="text-base text-white opacity-90">Privacy policy &amp; Terms of service</p>
            <div className="mx-auto mt-2 h-px w-56 bg-white/50" />
          </div>
        </div>
      </div>

      {/* Right panel — registration form */}
      <div className="w-full bg-white px-8 py-10 md:w-[55%] md:px-16 md:py-14">
        {/* Mobile-only heading */}
        <h1 className="mb-6 text-center text-3xl font-bold text-ink md:hidden">Sign Up</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-input-focus"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-input-focus"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-input-focus"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-label"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-input-focus"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded bg-btn-register py-3 text-sm font-semibold text-white transition-colors hover:bg-btn-register-hover"
          >
            Register
          </button>

          <p className="mt-4 text-center text-sm text-muted">
            Or{' '}
            <a href="#signin" className="font-semibold text-gradient-end hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

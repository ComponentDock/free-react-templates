import { useState, type FormEvent } from 'react'

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    onSubmit({ email, password })
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[22px] font-bold text-black dark:text-gray-900">Log In</h2>
      <p className="text-sm leading-relaxed text-[#777] dark:text-gray-600">
        Fill in your credentials to access your account.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
        <div>
          <label htmlFor="email" className="sr-only">
            Username or Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border-transparent bg-white px-3 py-2.5 text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-100 dark:text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-sm border-transparent bg-white px-3 py-2.5 text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-100 dark:text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-sm bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Login
        </button>
      </form>

      <div className="flex justify-center">
        <a
          href="#forgot"
          className="text-sm text-[#777] transition-colors hover:text-[#555] dark:text-gray-500"
        >
          Forgot password?
        </a>
      </div>

      <p className="text-center text-xs text-[#999] dark:text-gray-500">
        If you don&apos;t have account yet{' '}
        <a
          href="#signup"
          className="font-black text-[#555] transition-colors hover:text-brand dark:text-gray-700"
        >
          Sign up here
        </a>
      </p>
    </div>
  )
}

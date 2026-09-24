import { type FormEvent, useState } from 'react'
import { User, Lock } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Username */}
      <div className="relative mb-2.5">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="h-[50px] w-full rounded-full bg-[var(--color-input)] py-0 pl-[53px] pr-7 text-[15px] font-bold text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
        />
        <span className="pointer-events-none absolute left-[30px] top-1/2 -translate-y-1/2 text-[var(--color-icon)] transition-colors duration-300 focus-within:text-[var(--color-icon-focus)]">
          <User size={15} />
        </span>
      </div>

      {/* Password */}
      <div className="relative mb-2.5">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="h-[50px] w-full rounded-full bg-[var(--color-input)] py-0 pl-[53px] pr-7 text-[15px] font-bold text-[var(--color-input-text)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
        />
        <span className="pointer-events-none absolute left-[30px] top-1/2 -translate-y-1/2 text-[var(--color-icon)] transition-colors duration-300">
          <Lock size={15} />
        </span>
      </div>

      {/* Submit button */}
      <div className="flex w-full justify-center pt-2.5">
        <button
          type="submit"
          className="group relative h-[50px] w-full cursor-pointer overflow-hidden rounded-full bg-[var(--color-btn)] px-5 text-[15px] font-bold text-[#e0e0e0] transition-all duration-300 hover:bg-transparent hover:text-white"
        >
          {/* Gradient reveal on hover */}
          <span
            className="absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end))',
            }}
          />
          Login
        </button>
      </div>

      {/* Forgot password */}
      <div className="w-full pt-6 text-center">
        <a
          href="#forgot"
          className="text-[16px] text-[var(--color-body)] transition-colors hover:text-white"
        >
          Forgot Username / Password?
        </a>
      </div>

      {/* Create new account */}
      <div className="w-full pt-4 text-center">
        <a
          href="#register"
          className="inline-flex items-center gap-2 text-[16px] text-[var(--color-body)] transition-colors hover:text-white"
        >
          Create new account
          <span className="text-lg">→</span>
        </a>
      </div>
    </form>
  )
}

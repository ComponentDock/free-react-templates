import { type FormEvent, useState } from 'react'
import { Mail, Lock } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Email */}
      <div className="relative mb-2.5">
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="h-[50px] w-full rounded-full bg-[var(--color-input)] py-0 pl-[68px] pr-7 text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
        />
        <span className="pointer-events-none absolute left-[35px] top-1/2 -translate-y-1/2 text-[var(--color-body)] transition-all duration-300 peer-focus:text-[var(--color-accent)]">
          <Mail size={15} />
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
          className="h-[50px] w-full rounded-full bg-[var(--color-input)] py-0 pl-[68px] pr-7 text-[15px] text-[var(--color-body)] placeholder:text-[var(--color-placeholder)] focus:outline-none"
        />
        <span className="pointer-events-none absolute left-[35px] top-1/2 -translate-y-1/2 text-[var(--color-body)] transition-all duration-300">
          <Lock size={15} />
        </span>
      </div>

      {/* Submit button */}
      <div className="flex w-full justify-center pt-5">
        <button
          type="submit"
          className="h-[50px] w-full cursor-pointer rounded-full bg-[var(--color-accent)] px-5 text-[15px] font-bold uppercase text-white transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Login
        </button>
      </div>

      {/* Forgot password */}
      <div className="pt-3 text-center">
        <span className="text-[13px] text-[var(--color-placeholder)]">Forgot </span>
        <a
          href="#forgot"
          className="text-[13px] text-[var(--color-body)] transition-colors hover:text-[var(--color-accent)]"
        >
          Username / Password?
        </a>
      </div>

      {/* Create account */}
      <div className="pt-[136px] text-center">
        <a
          href="#register"
          className="text-[13px] text-[var(--color-body)] transition-colors hover:text-[var(--color-accent)]"
        >
          Create your Account →
        </a>
      </div>
    </form>
  )
}

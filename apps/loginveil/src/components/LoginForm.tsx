import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full p-4 md:w-1/2 md:p-5">
      <h3 className="mb-4 text-[22px] font-light text-[var(--color-ink)]">Sign In</h3>

      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-1 block text-[12px] font-bold uppercase tracking-[1px] text-[var(--color-ink)]"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="h-[48px] w-full border-b border-[var(--color-border)] bg-transparent px-0 text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(0,0,0,0.2)] focus:border-[var(--color-primary)]"
        />
      </div>

      <div className="relative mb-5">
        <label
          htmlFor="password"
          className="mb-1 block text-[12px] font-bold uppercase tracking-[1px] text-[var(--color-ink)]"
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
            placeholder="Password"
            className="h-[48px] w-full border-b border-[var(--color-border)] bg-transparent px-0 pr-10 text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[rgba(0,0,0,0.2)] focus:border-[var(--color-primary)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.3)] transition-colors hover:text-[var(--color-primary)]"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    </div>
  )
}

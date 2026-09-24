import { useState, type FormEvent } from 'react'
import { User, Lock } from 'lucide-react'

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void
  submitted: boolean
}

export function LoginForm({ onSubmit, submitted }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (username.trim() && password.trim()) {
      onSubmit(username, password)
    }
  }

  if (submitted) {
    return (
      <div className="text-center text-green-400">
        <p className="text-lg font-medium">Signed in successfully</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Username */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <User className="h-5 w-5 text-white/50" />
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
          aria-label="Username"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Lock className="h-5 w-5 text-white/50" />
        </div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
          aria-label="Password"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--color-primary)] py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-transparent"
      >
        Sign In
      </button>
    </form>
  )
}

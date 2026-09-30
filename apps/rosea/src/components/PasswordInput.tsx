import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function PasswordInput() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
      >
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="h-[52px] w-full rounded-[40px] border border-input-border bg-transparent px-5 pr-12 text-base text-white placeholder:text-placeholder focus:border-input-border-focus focus:outline-none"
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white/80"
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}

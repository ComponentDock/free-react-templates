import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'

export interface PasswordInputProps {
  /** Unique input id (e.g. "password", "password-confirm"). */
  id: string
  /** Visible field label text. */
  label: string
  /** Distinct fragment for the toggle's accessible name (e.g. "confirm password"). */
  toggleName: string
}

export function PasswordInput({ id, label, toggleName }: PasswordInputProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="h-[52px] w-full rounded-[40px] border border-white/30 bg-transparent pl-10 pr-5 text-base text-white placeholder:text-white/50 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        />
        <Lock
          aria-hidden="true"
          className="pointer-events-none absolute left-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white"
        />
        <button
          type="button"
          aria-label={visible ? `Hide ${toggleName}` : `Show ${toggleName}`}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function PasswordInput() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="h-[52px] w-full rounded-[40px] border-none bg-input-bg px-5 pr-12 text-base text-black placeholder:text-placeholder focus:outline-none"
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-black/50 transition-colors hover:text-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/50"
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}

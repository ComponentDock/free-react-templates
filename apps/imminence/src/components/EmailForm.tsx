import { type FormEvent, useState } from 'react'

interface EmailFormProps {
  onSubmit: (e: FormEvent) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={onSubmit} className="relative mt-10 flex h-12 w-full max-w-[400px]">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
        className="h-full flex-1 rounded-l-[2px] border border-transparent bg-input-bg px-6 text-sm shadow-[inset_0_0_1px_rgba(0,0,0,0.1)] outline-none transition-colors placeholder:text-sm placeholder:tracking-wider placeholder:text-muted focus:border-brand-pink-focus"
      />
      <button
        type="submit"
        className="rounded-r-[2px] bg-brand-pink px-5 text-sm font-bold text-white transition-colors hover:bg-brand-pink-hover"
      >
        NOTIFY US
      </button>
    </form>
  )
}

import { type FormEvent, useState } from 'react'

interface EmailFormProps {
  onSubmit: (e: FormEvent) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={onSubmit} className="relative mt-8 flex h-12 w-full max-w-[420px]">
      <label htmlFor="email-novus" className="sr-only">
        Email address
      </label>
      <input
        id="email-novus"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-full flex-1 rounded-l-md border border-input-border bg-input-bg px-5 text-sm text-white placeholder:text-muted focus:border-brand-cyan focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-md bg-brand-cyan px-6 text-sm font-bold text-white transition-colors hover:bg-brand-cyan-hover"
      >
        SUBSCRIBE
      </button>
    </form>
  )
}

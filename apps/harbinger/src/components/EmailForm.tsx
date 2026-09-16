import { type FormEvent, useState } from 'react'

interface EmailFormProps {
  onSubmit: (e: FormEvent) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={onSubmit} className="relative flex h-12 w-full max-w-[420px]">
      <label htmlFor="email-harbinger" className="sr-only">
        Email address
      </label>
      <input
        id="email-harbinger"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-full flex-1 rounded-l-sm border border-transparent bg-input-bg px-5 text-sm text-body placeholder:text-muted focus:border-brand-pink-focus focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-sm bg-brand-pink px-6 text-sm font-bold text-white transition-colors hover:bg-brand-pink-hover"
      >
        NOTIFY US
      </button>
    </form>
  )
}

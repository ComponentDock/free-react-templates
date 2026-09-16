import { type FormEvent, useState } from 'react'

export function EmailSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Email signup is a visual demo — no backend submission
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Email signup"
      className="relative mt-6 h-[50px] w-[400px] max-w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="h-full w-full rounded-full border border-white/30 bg-white/10 px-6 pr-[130px] text-sm text-white backdrop-blur-sm outline-none transition-colors placeholder:text-white/50 focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
      <button
        type="submit"
        className="absolute right-1 top-1 h-[calc(100%-8px)] w-[120px] rounded-full bg-brand font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        NOTIFY ME
      </button>
    </form>
  )
}

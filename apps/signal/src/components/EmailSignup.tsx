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
      className="relative mt-10 h-[53px] w-[450px] max-w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="h-full w-full rounded-[40px] bg-[#F1F2F3] py-0 pr-[140px] pl-[25px] text-sm text-gray-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.05),0_0_0_2px_rgba(255,255,255,0.5)] outline-none transition-colors placeholder:text-gray-400 focus:border-[#f89fbc] focus:ring-2 focus:ring-[#f89fbc]/30"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-full w-[120px] rounded-[40px] bg-[#F84982] font-heading text-sm font-semibold text-white transition-colors hover:bg-[#e40b52]"
      >
        NOTIFY US
      </button>
    </form>
  )
}

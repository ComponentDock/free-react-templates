import { type FormEvent, useState } from 'react'

export function NotifyButton() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="mt-6 text-sm font-semibold text-white" role="status">
        Thank you! We will notify you when we launch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Notify signup" className="mt-6">
      <button
        type="submit"
        className="rounded-[50px] bg-[#e91e63] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c2185b]"
      >
        Notify Us
      </button>
    </form>
  )
}

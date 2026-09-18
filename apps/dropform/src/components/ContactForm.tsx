import { useState } from 'react'

export function ContactForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setSendCopy] = useState(false)

  return (
    <div className="w-full max-w-[500px] rounded-sm bg-[--color-card] p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-semibold text-[--color-heading]">Contact Us</h1>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="h-12 rounded border border-[--color-border] px-4 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:border-[--color-btn] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded border border-[--color-border] px-4 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:border-[--color-btn] focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="resize-none rounded border border-[--color-border] px-4 py-3 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:border-[--color-btn] focus:outline-none"
        />

        <div className="mt-2 flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[--color-text]">
            <input
              type="checkbox"
              checked={sendCopy}
              onChange={(e) => setSendCopy(e.target.checked)}
              className="h-4 w-4 accent-[--color-check]"
            />
            Send copy to my-email
          </label>
          <button
            type="submit"
            className="rounded bg-[--color-btn] px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[--color-btn-hover]"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  )
}

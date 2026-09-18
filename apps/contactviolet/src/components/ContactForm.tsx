import { useState, type FormEvent } from 'react'
import { CircleCheck, CircleX } from 'lucide-react'

interface FieldState {
  value: string
  touched: boolean
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactForm() {
  const [name, setName] = useState<FieldState>({ value: '', touched: false })
  const [email, setEmail] = useState<FieldState>({ value: '', touched: false })
  const [message, setMessage] = useState<FieldState>({ value: '', touched: false })

  const nameError = name.touched && name.value.trim() === ''
  const nameValid = name.touched && name.value.trim() !== ''
  const emailValid = email.touched && email.value.trim() !== '' && isValidEmail(email.value)
  const emailError = email.touched && email.value.trim() !== '' && !isValidEmail(email.value)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setName((s) => ({ ...s, touched: true }))
    setEmail((s) => ({ ...s, touched: true }))
    setMessage((s) => ({ ...s, touched: true }))
  }

  return (
    <div className="w-full max-w-[500px] rounded-xl bg-[--color-card] p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-[--color-heading]">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name field */}
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={name.value}
              onChange={(e) => setName({ value: e.target.value, touched: name.touched })}
              onBlur={() => setName((s) => ({ ...s, touched: true }))}
              className={`h-12 w-full rounded border px-4 pr-10 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:outline-none ${
                nameError
                  ? 'border-[--color-error]'
                  : nameValid
                    ? 'border-[--color-valid]'
                    : 'border-[--color-border]'
              }`}
            />
            {nameError && (
              <CircleX className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[--color-error]" />
            )}
            {nameValid && (
              <CircleCheck className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[--color-valid]" />
            )}
          </div>
          {nameError && <p className="mt-1 text-xs text-[--color-error]">Please enter your name</p>}
        </div>

        {/* Email field */}
        <div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email.value}
              onChange={(e) => setEmail({ value: e.target.value, touched: email.touched })}
              onBlur={() => setEmail((s) => ({ ...s, touched: true }))}
              className={`h-12 w-full rounded border px-4 pr-10 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:outline-none ${
                emailError
                  ? 'border-[--color-error]'
                  : emailValid
                    ? 'border-[--color-valid]'
                    : 'border-[--color-border]'
              }`}
            />
            {emailError && (
              <CircleX className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[--color-error]" />
            )}
            {emailValid && (
              <CircleCheck className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[--color-valid]" />
            )}
          </div>
          {emailError && (
            <p className="mt-1 text-xs text-[--color-error]">Please enter a valid email</p>
          )}
        </div>

        {/* Message textarea */}
        <textarea
          placeholder="Your Message"
          value={message.value}
          onChange={(e) => setMessage({ value: e.target.value, touched: message.touched })}
          rows={5}
          className="resize-none rounded border border-[--color-border] px-4 py-3 text-sm text-[--color-heading] placeholder:text-[--color-placeholder] focus:border-[--color-btn] focus:outline-none"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-[--color-btn] to-[--color-btn-light] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:shadow-lg"
        >
          Send Email
        </button>

        {/* Phone contact line */}
        <p className="mt-2 text-center text-xs text-[--color-text]">
          Contact our 24/7 call center:{' '}
          <span className="font-medium text-[--color-btn]">+001 345 6889</span>
        </p>
      </form>
    </div>
  )
}

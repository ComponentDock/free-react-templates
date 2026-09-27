import { useState, type FormEvent } from 'react'

interface RegistrationFormProps {
  onSubmit?: () => void
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!acceptedTerms) {
      return
    }

    setSubmitted(true)
    onSubmit?.()
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h2 className="mb-4 text-xl font-bold text-[#333]">Thank You!</h2>
        <p className="text-sm text-[#666]">Your registration was successful. Welcome aboard!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Registration form" className="space-y-4">
      <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-widest text-[#333]">
        Registration Form
      </h3>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="firstName" className="mb-2 block text-xs text-[#666]">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="h-10 w-full rounded-full border border-[#ccc] bg-transparent px-5 text-xs font-bold text-[#333] outline-none focus:border-[#ae3c33]"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastName" className="mb-2 block text-xs text-[#666]">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="h-10 w-full rounded-full border border-[#ccc] bg-transparent px-5 text-xs font-bold text-[#333] outline-none focus:border-[#ae3c33]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs text-[#666]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-10 w-full rounded-full border border-[#ccc] bg-transparent px-5 text-xs font-bold text-[#333] outline-none focus:border-[#ae3c33]"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-xs text-[#666]">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="h-10 w-full rounded-full border border-[#ccc] bg-transparent px-5 text-xs font-bold text-[#333] outline-none focus:border-[#ae3c33]"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-2 block text-xs text-[#666]">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="h-10 w-full rounded-full border border-[#ccc] bg-transparent px-5 text-xs font-bold text-[#333] outline-none focus:border-[#ae3c33]"
        />
      </div>

      <div className="relative py-2">
        <label className="flex cursor-pointer items-center gap-2 text-xs text-[#666]">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="h-3 w-3 accent-[#ae3c33]"
          />
          I accept the Terms of Use &amp; Privacy Policy.
        </label>
      </div>

      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="h-10 w-40 rounded-full bg-[#ae3c33] text-xs font-semibold uppercase text-white transition-colors hover:bg-[#f11a09]"
        >
          Register Now
        </button>
      </div>
    </form>
  )
}

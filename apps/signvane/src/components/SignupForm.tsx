import { useState, type FormEvent } from 'react'

interface SignupFormProps {
  onSubmit?: (data: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
  }) => void
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit?.({ firstName, lastName, email, password, confirmPassword })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-[52px] w-full rounded-[40px] border-none bg-white px-5 text-base text-black placeholder:text-black/70 focus:outline-none"
          style={{
            boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="First Name"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="h-[52px] w-full rounded-[40px] border-none bg-white px-5 text-base text-black placeholder:text-black/70 focus:outline-none"
          style={{
            boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Last Name"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-[52px] w-full rounded-[40px] border-none bg-white px-5 text-base text-black placeholder:text-black/70 focus:outline-none"
        style={{
          boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.1)',
        }}
        aria-label="Email Address"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[52px] w-full rounded-[40px] border-none bg-white px-5 text-base text-black placeholder:text-black/70 focus:outline-none"
          style={{
            boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-[52px] w-full rounded-[40px] border-none bg-white px-5 text-base text-black placeholder:text-black/70 focus:outline-none"
          style={{
            boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Confirm Password"
        />
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="h-[52px] w-1/2 rounded-[40px] border border-brand bg-brand text-base font-medium text-white transition-all duration-300 hover:border-brand hover:bg-transparent hover:text-brand"
          style={{
            boxShadow: '0px 10px 19px -16px rgba(0, 0, 0, 0.29)',
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

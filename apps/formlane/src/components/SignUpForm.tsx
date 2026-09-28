import { type FormEvent } from 'react'
import { FormField } from './FormField'

interface SignUpFormProps {
  onSubmit: (e: FormEvent) => void
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <FormField id="signup-username" label="Username" />
      <FormField id="signup-email" label="E-Mail" type="email" />
      <FormField id="signup-password" label="Password" type="password" />
      <FormField id="signup-confirm" label="Confirm Password" type="password" />

      <button
        type="submit"
        className="mt-4 w-[160px] cursor-pointer rounded-[5px] bg-btn-bg py-3 text-[18px] font-bold text-btn-text transition-colors hover:bg-btn-hover"
      >
        Register
      </button>
    </form>
  )
}

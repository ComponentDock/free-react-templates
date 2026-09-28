import { type FormEvent } from 'react'
import { FormField } from './FormField'

interface SignInFormProps {
  onSubmit: (e: FormEvent) => void
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <FormField id="signin-username" label="Username" />
      <FormField id="signin-email" label="E-Mail" type="email" />
      <FormField id="signin-password" label="Password" type="password" />
      <FormField id="signin-confirm" label="Confirm Password" type="password" />

      <button
        type="submit"
        className="mt-4 w-[160px] cursor-pointer rounded-[5px] bg-btn-bg py-3 text-[18px] font-bold text-btn-text transition-colors hover:bg-btn-hover"
      >
        Sign In
      </button>
    </form>
  )
}

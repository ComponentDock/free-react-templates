import { type FormEvent, useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import { FormField } from './FormField'
import { SocialButtons } from './SocialButtons'

export function LoginForm() {
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const username = ((data.get('username') as string) || '').trim()
    const password = ((data.get('password') as string) || '').trim()

    const newErrors: typeof errors = {}
    if (!username) newErrors.username = 'Username is required'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
  }

  return (
    <div className="mx-auto w-full max-w-[500px] rounded-[10px] bg-white px-[55px] pt-[65px] pb-[54px]">
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-8 text-center font-[family-name:var(--font-poppins)] text-[39px] font-bold leading-tight text-[var(--color-heading)]">
          Login
        </h1>

        <FormField
          label="Username"
          name="username"
          placeholder="Type your username"
          icon={<Mail size={20} />}
          error={errors.username}
        />

        <FormField
          label="Password"
          type="password"
          name="password"
          placeholder="Type your password"
          icon={<Lock size={20} />}
          error={errors.password}
        />

        <div className="mb-6 text-right">
          <a
            href="#"
            className="font-[family-name:var(--font-poppins)] text-sm text-[var(--color-text-body)] transition-colors duration-300 hover:text-[var(--color-icon-focus)]"
          >
            Forgot password?
          </a>
        </div>

        <div className="relative mb-2 overflow-hidden rounded-[25px] shadow-[0_5px_30px_0px_rgba(3,216,222,0.2)]">
          <div className="absolute -left-full top-0 z-0 h-full w-[300%] bg-gradient-to-r from-[var(--color-button-gradient-start)] via-[var(--color-button-gradient-end)] to-[var(--color-button-gradient-start)] transition-all duration-300 group-hover:left-0" />
          <button
            type="submit"
            className="relative z-10 flex h-[50px] w-full cursor-pointer items-center justify-center border-0 bg-transparent font-[family-name:var(--font-poppins)] text-base font-medium uppercase text-white transition-all duration-300 hover:tracking-wider"
          >
            Login
          </button>
        </div>

        <SocialButtons />

        <div className="mt-[55px] flex flex-col items-center">
          <span className="mb-3 font-[family-name:var(--font-poppins)] text-sm text-[var(--color-text-body)]">
            Or Sign Up Using
          </span>
          <a
            href="#"
            className="font-[family-name:var(--font-poppins)] text-sm font-medium uppercase text-[var(--color-signup-text)] transition-colors duration-300 hover:text-[var(--color-icon-focus)]"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  )
}

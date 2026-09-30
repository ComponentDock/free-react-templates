import { Send, User } from 'lucide-react'
import { PasswordInput } from './PasswordInput'

const pillClass =
  'h-[52px] w-full rounded-[40px] border border-white/30 bg-transparent pl-10 pr-5 text-base text-white placeholder:text-white/50 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SignupForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
        >
          Full Name
        </label>
        <div className="relative">
          <input id="fullname" type="text" placeholder="John Doe" className={pillClass} />
          <User
            aria-hidden="true"
            className="pointer-events-none absolute left-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
        >
          Email Address
        </label>
        <div className="relative">
          <input id="email" type="text" placeholder="johndoe@gmail.com" className={pillClass} />
          <Send
            aria-hidden="true"
            className="pointer-events-none absolute left-[15px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <PasswordInput id="password" label="Password" toggleName="password" />
      </div>

      <div className="mb-4">
        <PasswordInput
          id="password-confirm"
          label="Confirm Password"
          toggleName="confirm password"
        />
      </div>

      <button
        type="submit"
        className="h-[52px] w-full cursor-pointer rounded-[40px] border border-accent bg-accent text-[15px] text-white transition-colors duration-300 hover:bg-transparent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
      >
        Sign Up
      </button>
    </form>
  )
}

import type { FormEvent } from 'react'
import { User, Phone, Mail, Lock } from 'lucide-react'

const fields = [
  { name: 'username', type: 'text', placeholder: 'Username', Icon: User },
  { name: 'phone', type: 'text', placeholder: 'Phone Number', Icon: Phone },
  { name: 'email', type: 'email', placeholder: 'Mail', Icon: Mail },
  { name: 'password', type: 'password', placeholder: 'Password', Icon: Lock },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    Icon: Lock,
  },
] as const

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function RegistrationCard() {
  return (
    <div className="relative w-full max-w-[435px]">
      {/* Decorative character image — left side, desktop only */}
      <img
        src="https://picsum.photos/seed/regbox-character/300/450"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 hidden w-[260px] object-contain md:block"
      />

      {/* Decorative plant image — right side, desktop only */}
      <img
        src="https://picsum.photos/seed/regbox-plant/200/300"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-8 hidden w-[180px] object-contain md:block"
      />

      {/* Card */}
      <div className="w-full bg-[var(--color-form-bg)] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]">
        <form
          onSubmit={handleSubmit}
          className="px-[61px] py-[66px] max-md:px-[35px] max-md:py-[35px]"
        >
          <h2 className="mb-8 text-center text-[25px] font-semibold uppercase tracking-[3px] text-[var(--color-heading)]">
            New Account?
          </h2>

          <div className="space-y-1">
            {fields.map(({ name, type, placeholder, Icon }) => (
              <div
                key={name}
                className="flex items-center border-b border-[var(--color-input-border)] transition-colors focus-within:border-[var(--color-input-focus)]"
              >
                <Icon
                  size={16}
                  className="mr-3 shrink-0 text-[var(--color-icon)]"
                  aria-hidden="true"
                />
                <input
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  className="w-full bg-transparent py-3 text-[15px] font-semibold text-[var(--color-input-text)] placeholder:text-[14px] placeholder:font-normal placeholder:text-[var(--color-placeholder)] focus:outline-none"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="register-btn relative mt-8 h-[49px] w-full cursor-pointer overflow-hidden border-none bg-[var(--color-brand-primary)] text-[15px] font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-[var(--color-brand-primary)]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

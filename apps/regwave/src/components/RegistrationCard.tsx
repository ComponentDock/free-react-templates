import type { FormEvent } from 'react'

const formFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
] as const

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function RegistrationCard() {
  return (
    <div className="w-full max-w-[850px] rounded-[10px] bg-[var(--color-form-bg)] shadow-[0px_8px_20px_0px_var(--color-card-shadow)] md:flex">
      {/* Left information panel */}
      <div className="flex flex-col justify-between rounded-tl-[10px] bg-[var(--color-brand-primary)] p-8 text-white md:rounded-bl-[10px] md:rounded-tr-none md:w-1/2">
        <div>
          <h2 className="mb-8 text-[30px] font-bold">INFOMATION</h2>
          <p className="mb-4 text-[15px] font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat
            commodo.
          </p>
          <p className="mb-6 text-[15px] font-light leading-relaxed">
            <span className="font-bold">Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc
            vel risus commodo viverra. Praesent elementum facilisis leo vel.
          </p>
        </div>
        <div>
          <button
            type="button"
            className="w-[180px] cursor-pointer rounded-tl-[5px] rounded-br-[5px] border-none bg-white px-4 py-[15px] text-[15px] font-bold text-[var(--color-heading)] transition-colors hover:bg-[#e5e5e5]"
          >
            Have An Account
          </button>
        </div>
      </div>

      {/* Right form panel */}
      <form onSubmit={handleSubmit} className="flex flex-col p-8 md:w-1/2 md:rounded-tr-[10px]">
        <h2 className="mb-8 text-[30px] font-bold text-[var(--color-brand-primary)]">
          REGISTER FORM
        </h2>

        {/* First Name + Last Name row */}
        <div className="flex gap-2">
          {formFields.map(({ name, label, type }) => (
            <div key={name} className="w-1/2">
              <label
                htmlFor={name}
                className="mb-2 block text-[15px] font-semibold text-[var(--color-label)]"
              >
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                required
                className="mb-[27px] w-full rounded-tl-[5px] rounded-br-[5px] border border-[var(--color-input-border)] px-[15px] py-[11.5px] text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-brand-focus)]"
              />
            </div>
          ))}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[15px] font-semibold text-[var(--color-label)]"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mb-[27px] w-full rounded-tl-[5px] rounded-br-[5px] border border-[var(--color-input-border)] px-[15px] py-[11.5px] text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-brand-focus)]"
          />
        </div>

        {/* Password + Confirm Password row */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="password"
              className="mb-2 block text-[15px] font-semibold text-[var(--color-label)]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mb-[27px] w-full rounded-tl-[5px] rounded-br-[5px] border border-[var(--color-input-border)] px-[15px] py-[11.5px] text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-brand-focus)]"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-[15px] font-semibold text-[var(--color-label)]"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mb-[27px] w-full rounded-tl-[5px] rounded-br-[5px] border border-[var(--color-input-border)] px-[15px] py-[11.5px] text-[15px] text-[var(--color-input-text)] outline-none transition-colors focus:border-[var(--color-brand-focus)]"
            />
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="relative mb-2">
          <label className="flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-1 accent-[var(--color-brand-primary)]"
            />
            <span className="text-[14px] font-semibold text-[var(--color-heading)]">
              I agree to the{' '}
              <span className="font-bold text-[var(--color-brand-primary)] underline">
                Terms and Conditions
              </span>
            </span>
          </label>
        </div>

        {/* Register button */}
        <div>
          <button
            type="submit"
            className="mt-1 w-[130px] cursor-pointer rounded-tl-[5px] rounded-br-[5px] border-none bg-[var(--color-brand-primary)] px-[12.5px] py-[12.5px] text-[15px] font-bold text-white transition-colors hover:bg-[var(--color-brand-primary-hover)]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

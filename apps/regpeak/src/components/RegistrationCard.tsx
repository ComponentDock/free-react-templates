import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function RegistrationCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="mx-auto flex w-full max-w-[968px] flex-col overflow-hidden rounded-lg bg-white md:flex-row">
      {/* Image panel */}
      <div className="hidden w-[45%] md:block">
        <img
          src="https://picsum.photos/seed/regpeak/800/600"
          alt="Registration illustration"
          className="h-full w-full rounded-l-lg object-cover"
        />
      </div>

      {/* Mobile image panel */}
      <div className="block md:hidden">
        <img
          src="https://picsum.photos/seed/regpeak/800/600"
          alt="Registration illustration"
          className="h-[200px] w-full rounded-t-lg object-cover"
        />
      </div>

      {/* Form section */}
      <div className="flex w-full flex-col items-center px-8 py-10 md:w-[55%] md:px-12">
        <h2 className="mb-12 text-center font-sans text-[35px] font-bold text-ink">
          Register Form
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-[35px]">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[92%] border-2 border-transparent border-b-border bg-transparent pb-2 font-sans text-base font-bold text-ink placeholder-muted focus:border-b-brand focus:outline-none"
            />
          </div>

          <div className="mb-[35px]">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[92%] border-2 border-transparent border-b-border bg-transparent pb-2 font-sans text-base font-bold text-ink placeholder-muted focus:border-b-brand focus:outline-none"
            />
          </div>

          <div className="mb-[35px]">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[92%] border-2 border-transparent border-b-border bg-transparent pb-2 font-sans text-base font-bold text-ink placeholder-muted focus:border-b-brand focus:outline-none"
            />
          </div>

          <div className="mb-[35px]">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-[92%] border-2 border-transparent border-b-border bg-transparent pb-2 font-sans text-base font-bold text-ink placeholder-muted focus:border-b-brand focus:outline-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="h-[50px] w-[160px] cursor-pointer rounded-[6px] bg-brand font-sans text-lg font-bold uppercase text-white shadow-[0px_3px_10px_0px_rgba(0,0,0,0.15)] transition-colors hover:bg-brand-hover"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

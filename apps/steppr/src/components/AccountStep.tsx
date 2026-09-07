import type { AccountData } from '../App'

interface AccountStepProps {
  data: AccountData
  onChange: (data: AccountData) => void
}

export function AccountStep({ data, onChange }: AccountStepProps) {
  return (
    <section
      aria-labelledby="step1-heading"
      className="rounded-lg bg-primary-400 p-8 sm:p-[32px_115px_23px_75px]"
    >
      <h2 id="step1-heading" className="sr-only">
        Account Information
      </h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="username" className="mb-2 block text-base font-medium text-white">
            Username*
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            value={data.username}
            onChange={(e) => onChange({ ...data, username: e.target.value })}
            className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-base font-medium text-white">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your Email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
          />
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label htmlFor="password" className="mb-2 block text-base font-medium text-white">
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              value={data.password}
              onChange={(e) => onChange({ ...data, password: e.target.value })}
              className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-base font-medium text-white"
            >
              Confirm Password*
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={(e) => onChange({ ...data, confirmPassword: e.target.value })}
              className="w-full rounded-[5px] border-none bg-primary-500 px-[25px] py-3 font-raleway text-base text-white placeholder-white/60 outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

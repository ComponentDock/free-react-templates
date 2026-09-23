import { useState } from 'react'
import { UserIcon } from './UserIcon'
import { CustomCheckbox } from './CustomCheckbox'

export function LoginCard() {
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <section aria-label="Login card" className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[500px] rounded-[10px] bg-white px-8 py-10 shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)]">
        <h1 className="mb-8 text-center text-[28px] font-normal text-black">Login #08</h1>

        <UserIcon />

        <h2 className="mb-6 text-center text-[20px] font-bold text-brand">Have an account?</h2>

        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              aria-label="Username"
              className="h-[48px] w-full rounded-md border border-transparent bg-input-bg px-5 text-base text-black placeholder-black/20 transition-all duration-200 focus:border-transparent focus:bg-input-focus-bg focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              className="h-[48px] w-full rounded-md border border-transparent bg-input-bg px-5 text-base text-black placeholder-black/20 transition-all duration-200 focus:border-transparent focus:bg-input-focus-bg focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <CustomCheckbox label="Remember Me" checked={rememberMe} onChange={setRememberMe} />
            <a
              href="#forgot"
              className="text-[15px] text-brand transition-colors duration-300 hover:text-brand-light"
            >
              Forgot Password
            </a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="h-[48px] w-full rounded-[40px] border border-brand bg-brand px-20 text-[15px] font-normal text-white transition-all duration-300 hover:border-brand hover:bg-transparent hover:text-brand"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

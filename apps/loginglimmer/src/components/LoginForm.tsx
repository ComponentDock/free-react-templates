import type { FormEvent } from 'react'

interface LoginFormProps {
  errors: { email?: string; password?: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function LoginForm({ errors, onSubmit }: LoginFormProps) {
  return (
    <div
      className="w-[500px] max-md:w-full max-md:px-4 max-md:py-10"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 3px 20px 0px rgba(0, 0, 0, 0.1)',
        padding: '65px 55px 50px 55px',
      }}
    >
      <h2
        className="mb-8 w-full text-center font-opensans text-[30px]"
        style={{ color: '#555555', lineHeight: '1.2' }}
      >
        Account Login
      </h2>

      <form onSubmit={onSubmit} noValidate>
        {/* Email */}
        <div className="relative w-full border" style={{ borderColor: '#e6e6e6' }}>
          <input
            type="text"
            name="email"
            autoComplete="email"
            aria-label="Email"
            className="w-full bg-transparent px-[25px] py-[22px] font-opensans text-[15px] outline-none"
            style={{ color: '#666666' }}
            placeholder="Email"
          />
          {errors.email && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border px-2.5 py-1 font-opensans text-[13px]"
              style={{
                color: '#c80000',
                borderColor: '#c80000',
                backgroundColor: '#fff',
              }}
            >
              {errors.email}
            </span>
          )}
        </div>

        {/* Password — connected to email (no top border) */}
        <div className="relative w-full border border-t-0" style={{ borderColor: '#e6e6e6' }}>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            aria-label="Password"
            className="w-full bg-transparent px-[25px] py-[22px] font-opensans text-[15px] outline-none"
            style={{ color: '#666666' }}
            placeholder="Password"
          />
          {errors.password && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border px-2.5 py-1 font-opensans text-[13px]"
              style={{
                color: '#c80000',
                borderColor: '#c80000',
                backgroundColor: '#fff',
              }}
            >
              {errors.password}
            </span>
          )}
        </div>

        {/* Sign in button */}
        <div className="mt-5 flex w-full flex-wrap">
          <button
            type="submit"
            className="flex h-[60px] w-full cursor-pointer items-center justify-center border-none font-opensans text-[14px] uppercase text-white transition-all duration-[0.4s] hover:bg-[#333333]"
            style={{ backgroundColor: '#4272d7' }}
          >
            SIGN IN
          </button>
        </div>

        {/* Forgot password */}
        <div className="pb-1 pt-[45px] text-center">
          <span className="font-opensans text-[15px]" style={{ color: '#999999' }}>
            Forgot{' '}
          </span>
          <a
            href="#"
            className="font-opensans text-[15px] transition-colors duration-[0.4s] hover:underline"
            style={{ color: '#4272d7' }}
          >
            Username / Password?
          </a>
        </div>

        {/* Sign up */}
        <div className="text-center">
          <span className="font-opensans text-[15px]" style={{ color: '#999999' }}>
            Create an account?{' '}
          </span>
          <a
            href="#"
            className="font-opensans text-[15px] transition-colors duration-[0.4s] hover:underline"
            style={{ color: '#4272d7' }}
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  )
}

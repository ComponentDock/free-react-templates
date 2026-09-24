import type { FormEvent } from 'react'

interface LoginCardProps {
  errors: { username?: string; password?: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function LoginCard({ errors, onSubmit }: LoginCardProps) {
  return (
    <>
      {/* Green header strip */}
      <h2
        className="w-full rounded-t-[20px] py-[50px] text-center font-josefin text-[30px] font-bold text-white"
        style={{ backgroundColor: '#57b846', paddingBottom: '39px' }}
      >
        Sign In
      </h2>

      {/* Form body */}
      <div className="px-[35px] pt-[35px] pb-[45px]">
        <form onSubmit={onSubmit} noValidate>
          {/* Username input */}
          <div className="relative mb-[25px]">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              className="peer h-[55px] w-full rounded-[27px] bg-[#ebebeb] px-[35px] font-ubuntu text-[15px] font-bold text-[#1b3815] outline-none transition-all duration-[0.4s] focus:ml-[-10px] focus:w-[calc(100%+20px)]"
            />
            {errors.username && (
              <span
                className="absolute right-0 top-full mt-1 whitespace-nowrap rounded-[14px] border px-2 py-1 font-ubuntu text-[13px]"
                style={{ color: '#c80000', borderColor: '#c80000' }}
              >
                {errors.username}
              </span>
            )}
          </div>

          {/* Password input */}
          <div className="relative mb-[25px]">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="peer h-[55px] w-full rounded-[27px] bg-[#ebebeb] px-[35px] font-ubuntu text-[15px] font-bold text-[#1b3815] outline-none transition-all duration-[0.4s] focus:ml-[-10px] focus:w-[calc(100%+20px)]"
            />
            {errors.password && (
              <span
                className="absolute right-0 top-full mt-1 whitespace-nowrap rounded-[14px] border px-2 py-1 font-ubuntu text-[13px]"
                style={{ color: '#c80000', borderColor: '#c80000' }}
              >
                {errors.password}
              </span>
            )}
          </div>

          {/* Forgot link */}
          <div className="mb-[30px] text-right font-ubuntu text-[15px]">
            <span style={{ color: '#999999' }}>Forgot </span>
            <a
              href="#"
              className="transition-colors duration-[0.4s] hover:underline"
              style={{ color: '#57b846' }}
            >
              Username / Password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mb-[30px] h-[50px] w-full cursor-pointer rounded-[25px] border-none font-ubuntu text-[15px] font-bold uppercase text-white transition-colors duration-[0.4s] hover:bg-[#1b3815]"
            style={{ backgroundColor: '#57b846' }}
          >
            Sign in
          </button>

          {/* Sign up section */}
          <div className="text-center font-ubuntu text-[15px]">
            <span style={{ color: '#999999' }}>Don't have an account? </span>
            <a
              href="#"
              className="font-bold uppercase transition-colors duration-[0.4s] hover:underline"
              style={{ color: '#57b846' }}
            >
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

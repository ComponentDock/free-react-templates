import type { FormEvent } from 'react'
import { SocialButton } from './SocialButton'

interface LoginCardProps {
  errors: { username?: string; password?: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function LoginCard({ errors, onSubmit }: LoginCardProps) {
  return (
    <div className="px-[55px] pt-[80px] pb-[30px] sm:px-[15px] sm:pt-[50px]">
      {/* Title */}
      <h2 className="mb-[30px] text-center font-source text-[30px] font-bold text-[#4b2354]">
        Sign In
      </h2>

      <form onSubmit={onSubmit} noValidate>
        {/* Username input */}
        <div className="relative mb-[20px]">
          <input
            type="text"
            name="username"
            placeholder="username or email"
            autoComplete="username"
            className="peer h-[62px] w-full rounded-[20px] border-none bg-transparent px-[23px] font-source text-[16px] font-bold text-[#4b2354] outline-none placeholder:text-[#4b2354]/60 focus:shadow-[0_5px_30px_0px_rgba(0,0,0,0.2)]"
            style={{ transition: 'box-shadow 0.4s' }}
          />
          {errors.username && (
            <span className="mt-1 block text-right font-source text-[13px] text-[#fa4251]">
              {errors.username}
            </span>
          )}
        </div>

        {/* Password input */}
        <div className="relative mb-[30px]">
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            className="peer h-[62px] w-full rounded-[20px] border-none bg-transparent px-[23px] font-source text-[16px] font-bold text-[#4b2354] outline-none placeholder:text-[#4b2354]/60 focus:shadow-[0_5px_30px_0px_rgba(0,0,0,0.2)]"
            style={{ transition: 'box-shadow 0.4s' }}
          />
          {errors.password && (
            <span className="mt-1 block text-right font-source text-[13px] text-[#fa4251]">
              {errors.password}
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mb-[30px] h-[50px] w-full min-w-[160px] cursor-pointer rounded-[25px] border-none bg-[#bd59d4] font-source text-[14px] font-semibold text-white transition-colors duration-[0.4s] hover:bg-[#9b24bd]"
        >
          Sign In
        </button>

        {/* Divider */}
        <p className="mb-[20px] text-center font-source text-[16px] text-[#999999]">
          Or login with
        </p>

        {/* Social buttons */}
        <div className="mb-[20px] flex justify-center gap-[10px]">
          <SocialButton provider="facebook" />
          <SocialButton provider="google" />
        </div>

        {/* Sign Up link */}
        <div className="text-center font-source text-[16px]">
          <a href="#" className="text-[#4b2354] transition-colors duration-[0.4s] hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  )
}

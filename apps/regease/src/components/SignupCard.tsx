import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-[562px] bg-brand-gold/75 px-[55px] py-[54px] max-md:px-[30px] max-md:py-[36px]">
      <h2 className="mb-2 text-[36px] font-bold text-white">Sign up</h2>
      <p className="mb-8 text-[14px] font-semibold text-white">
        to get discount 10% when pre-order{' '}
        <span className="font-bold">&ldquo;Batman Beyond&rdquo;</span>
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-[23px]">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full border-b border-white/40 bg-transparent pb-[3px] pt-1 text-[14px] font-semibold text-white placeholder-white/70 outline-none"
            aria-label="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full border-b border-white/40 bg-transparent pb-[3px] pt-1 text-[14px] font-semibold text-white placeholder-white/70 outline-none"
            aria-label="Email"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full border-b border-white/40 bg-transparent pb-[3px] pt-1 pr-10 text-[14px] font-semibold text-white placeholder-white/70 outline-none"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Terms checkbox */}
        <div className="mb-2">
          <label className="flex items-start gap-3 text-[13px] font-normal text-white">
            <input
              type="checkbox"
              name="agree-term"
              id="agree-term"
              className="mt-0.5 h-[13px] w-[13px] shrink-0 accent-white"
              aria-label="I agree all statements in Terms of service"
            />
            <span>
              I agree all statements in{' '}
              <a href="#terms" className="text-white hover:underline">
                Terms of service
              </a>
            </span>
          </label>
        </div>

        {/* Submit row */}
        <div className="flex items-center gap-[25px] max-sm:flex-col max-sm:gap-5">
          <button
            type="submit"
            className="cursor-pointer rounded-[25px] bg-white px-[30px] py-[10px] text-[13px] font-semibold uppercase text-brand-gold shadow-[0px_15px_10px_rgba(0,0,0,0.15)] transition-colors hover:bg-gray-100 max-sm:w-full"
          >
            Sign up
          </button>
          <a
            href="#signin"
            className="inline-block rounded-[25px] border-2 border-white px-[30px] py-[10px] text-center text-[13px] font-semibold uppercase text-white no-underline transition-colors hover:bg-white hover:text-brand-gold max-sm:w-full"
          >
            Sign in
          </a>
        </div>
      </form>
    </div>
  )
}

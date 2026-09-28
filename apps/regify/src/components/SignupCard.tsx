import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-[660px] rounded-[10px] bg-card px-[85px] py-[50px] shadow-lg max-sm:px-[25px]">
      <h2 className="mb-10 text-center text-[24px] font-black uppercase text-heading">
        Create account
      </h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full rounded-[5px] border border-border px-5 py-[17px] text-[14px] font-medium text-heading placeholder-muted outline-none focus:border-transparent focus:ring-0"
            aria-label="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full rounded-[5px] border border-border px-5 py-[17px] text-[14px] font-medium text-heading placeholder-muted outline-none focus:border-transparent focus:ring-0"
            aria-label="Your Email"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full rounded-[5px] border border-border px-5 py-[17px] pr-12 text-[14px] font-medium text-heading placeholder-muted outline-none focus:border-transparent focus:ring-0"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-body"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Repeat Password */}
        <div>
          <input
            type="password"
            name="re_password"
            id="re_password"
            placeholder="Repeat your password"
            className="w-full rounded-[5px] border border-border px-5 py-[17px] text-[14px] font-medium text-heading placeholder-muted outline-none focus:border-transparent focus:ring-0"
            aria-label="Repeat your password"
          />
        </div>

        {/* Terms checkbox */}
        <div className="mb-6 mt-2">
          <label className="flex items-start gap-3 text-[12px] font-semibold text-body">
            <input
              type="checkbox"
              name="agree-term"
              id="agree-term"
              className="mt-0.5 h-[13px] w-[13px] shrink-0 accent-heading"
              aria-label="I agree all statements in Terms of service"
            />
            <span>
              I agree all statements in{' '}
              <a href="#terms" className="text-body hover:text-heading">
                Terms of service
              </a>
            </span>
          </label>
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-[5px] bg-gradient-to-l from-brand to-brand-end px-5 py-[17px] text-[14px] font-bold uppercase text-white transition-opacity hover:opacity-90"
          >
            Sign up
          </button>
        </div>
      </form>

      {/* Login link */}
      <p className="mt-[91px] mb-[5px] text-center text-[14px] font-medium text-body">
        Have already an account ?{' '}
        <a href="#login" className="font-bold text-heading hover:underline">
          Login here
        </a>
      </p>
    </div>
  )
}

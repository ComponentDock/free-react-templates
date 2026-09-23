import { useState } from 'react'

export function RightPanel() {
  const [remember, setRemember] = useState(true)

  return (
    <div className="flex w-full flex-col bg-[var(--color-primary)] p-4 md:w-1/2 md:p-5">
      {/* Submit button */}
      <div className="mb-5">
        <button
          type="submit"
          className="h-[48px] w-full cursor-pointer rounded-[3px] border border-[var(--color-btn)] bg-[var(--color-btn)] px-3 text-[15px] text-white transition-all hover:border-[var(--color-btn)] hover:bg-transparent hover:text-[var(--color-btn)] focus:outline-none"
        >
          Sign me in now
        </button>
      </div>

      {/* Remember Me + Forgot Password */}
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="flex w-full cursor-pointer items-center gap-2 text-[14px] text-white sm:w-1/2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-[18px] w-[18px] accent-white"
          />
          Remember Me
        </label>
        <div className="w-full text-left sm:w-1/2 sm:text-right">
          <a
            href="#forgot"
            className="text-[14px] text-white transition-colors hover:text-white/80"
          >
            Forgot Password
          </a>
        </div>
      </div>

      {/* Divider */}
      <p className="mb-4 w-full text-center text-[14px] text-white">— Or Sign In With —</p>

      {/* Social icons */}
      <div className="flex justify-center gap-[5px]">
        <a
          href="#facebook"
          aria-label="Login with Facebook"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[var(--color-social-bg)] transition-colors hover:bg-white"
        >
          <svg
            className="h-[16px] w-[16px]"
            fill="var(--color-social-text)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="#twitter"
          aria-label="Login with Twitter"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[var(--color-social-bg)] transition-colors hover:bg-white"
        >
          <svg
            className="h-[16px] w-[16px]"
            fill="var(--color-social-text)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

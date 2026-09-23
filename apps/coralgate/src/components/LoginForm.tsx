import { useState } from 'react'

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

export function LoginForm() {
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <section
      aria-label="Login card"
      className="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans"
    >
      <div className="flex w-full max-w-[750px] overflow-hidden rounded bg-white shadow-lg">
        {/* Left column — form panel */}
        <div data-left-column className="w-full p-8 sm:w-1/2">
          {/* Header with heading and social icons */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Sign In</h1>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-coral-300 hover:text-white"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                aria-label="Sign in with Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-coral-300 hover:text-white"
              >
                <TwitterIcon />
              </button>
            </div>
          </div>

          {/* Username field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-1 block text-xs font-semibold tracking-wider text-gray-400 uppercase"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-coral-300"
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1 block text-xs font-semibold tracking-wider text-gray-400 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-coral-300"
            />
          </div>

          {/* Sign In button */}
          <button
            type="button"
            className="mb-4 w-full rounded-full bg-coral-300 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-400"
          >
            Sign In
          </button>

          {/* Footer row: Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-coral-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-coral-300"
              />
              Remember Me
            </label>
            <a
              href="#forgot"
              className="text-xs text-gray-400 transition-colors hover:text-coral-300"
            >
              Forgot Password
            </a>
          </div>
        </div>

        {/* Right column — welcome panel */}
        <div
          role="complementary"
          aria-label="Welcome panel"
          className="hidden flex-col items-center justify-center rounded-r bg-gradient-to-b from-coral-300 to-coral-500 p-8 text-center sm:flex sm:w-1/2"
        >
          <h2 className="mb-3 text-2xl font-bold text-white">Welcome to login</h2>
          <p className="mb-6 text-sm text-white">Don&apos;t have an account?</p>
          <button
            type="button"
            className="rounded-full border-2 border-white bg-transparent px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-coral-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

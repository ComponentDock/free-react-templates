import { useState } from 'react'

export function SignupForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="w-full bg-[var(--color-bg-form)] px-8 py-10 md:w-1/2 md:px-10 md:py-12">
      <h3 className="mb-6 text-[22px] font-bold text-[var(--color-text-body)]">
        Hello!{' '}
        <span className="font-normal text-[var(--color-text-sub)]">Please signup to continue</span>
      </h3>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div>
          <label
            htmlFor="full-name"
            className="mb-1 block text-[14px] font-medium text-[var(--color-text-body)]"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded border border-[var(--color-input-border)] bg-white px-3 py-2 text-[15px] text-[var(--color-text-body)] outline-none placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-primary)] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,0.25)]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-[14px] font-medium text-[var(--color-text-body)]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-[var(--color-input-border)] bg-white px-3 py-2 text-[15px] text-[var(--color-text-body)] outline-none placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-primary)] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,0.25)]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-[14px] font-medium text-[var(--color-text-body)]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-[var(--color-input-border)] bg-white px-3 py-2 text-[15px] text-[var(--color-text-body)] outline-none placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-primary)] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,0.25)]"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-1 block text-[14px] font-medium text-[var(--color-text-body)]"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded border border-[var(--color-input-border)] bg-white px-3 py-2 text-[15px] text-[var(--color-text-body)] outline-none placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-primary)] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,0.25)]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[var(--color-primary)] py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[var(--color-input-border)]" />
        <span className="whitespace-nowrap text-[13px] text-[var(--color-text-sub)]">
          or Signup with
        </span>
        <div className="h-px flex-1 bg-[var(--color-input-border)]" />
      </div>

      <div className="flex justify-center gap-3">
        <a
          href="#facebook"
          aria-label="Signup with Facebook"
          className="flex h-10 w-10 items-center justify-center rounded bg-[var(--color-facebook)] text-white transition-opacity hover:opacity-90"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="#twitter"
          aria-label="Signup with Twitter"
          className="flex h-10 w-10 items-center justify-center rounded bg-[var(--color-twitter)] text-white transition-opacity hover:opacity-90"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>

      <p className="mt-6 text-center text-[14px] text-[var(--color-text-sub)]">
        I&apos;m already a member!{' '}
        <a
          href="#signin"
          className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]"
        >
          Sign In
        </a>
      </p>
    </div>
  )
}

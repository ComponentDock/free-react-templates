import type { FormEvent } from 'react'

export function SignUpForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12">
      {/* Heading with wavy underline decoration */}
      <h1 className="mb-2 text-center font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
        Sign Up
      </h1>
      <div className="mb-8 flex justify-center">
        <svg width="80" height="12" viewBox="0 0 80 12" fill="none" aria-hidden="true">
          <path
            d="M2 6C6 2 10 10 14 6C18 2 22 10 26 6C30 2 34 10 38 6C42 2 46 10 50 6C54 2 58 10 62 6C66 2 70 10 74 6C78 2 80 6 80 6"
            stroke="var(--color-brand-dark)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="mb-1 block text-sm font-medium text-[var(--color-ink)]"
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            className="h-12 w-full rounded border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--color-ink)]">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="h-12 w-full rounded border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-[var(--color-ink)]"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="h-12 w-full rounded border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-input-focus)] focus:outline-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-2 h-14 w-full cursor-pointer rounded-full border-2 border-white bg-white text-sm font-semibold uppercase tracking-wide text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand-light)]"
        >
          Create My Account
        </button>
      </form>

      {/* Social sign-up */}
      <div className="mt-8 text-center">
        <p className="mb-4 text-sm text-[var(--color-ink)]">Sign up with social platforms</p>
        <div className="flex justify-center gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign up with Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-social)] text-[var(--color-social)] transition-colors hover:bg-[var(--color-brand-light)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign up with Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-social)] text-[var(--color-social)] transition-colors hover:bg-[var(--color-brand-light)]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign up with Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-social)] text-[var(--color-social)] transition-colors hover:bg-[var(--color-brand-light)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          {/* Tumblr */}
          <a
            href="https://www.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign up with Tumblr"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-social)] text-[var(--color-social)] transition-colors hover:bg-[var(--color-brand-light)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 10.096 0h3.617v6.234h4.938v3.513h-4.952v7.45c.012 1.014.387 2.417 2.276 2.417h.12c.65-.02 1.517-.208 1.972-.433l1.163 3.512C19.167 22.554 21.532 24 24 24h-1.201c-1.612 0-4.74-.545-6.437-2.556z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

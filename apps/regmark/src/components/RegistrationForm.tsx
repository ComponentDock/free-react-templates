import { type FormEvent, useState } from 'react'

const USER_TYPES = ['New bee', 'Average', 'Master'] as const

export function RegistrationForm() {
  const [selectedType, setSelectedType] = useState<string>(USER_TYPES[0])
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!agreed) return
    setSubmitted(true)
  }

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-bg px-4 py-12 dark:bg-gray-900">
      {/* Watermark "Sign up" text */}
      <div className="pointer-events-none absolute top-8 right-0 select-none text-[8rem] font-bold leading-none text-brand/10 sm:text-[12rem] md:top-4 md:text-[16rem]">
        Sign up
      </div>

      <div className="relative z-10 w-full max-w-[460px] rounded-xl bg-card p-8 shadow-lg dark:bg-gray-800 sm:p-10">
        {/* Heading */}
        <h1 className="mb-6 text-center text-xl font-semibold text-ink dark:text-white">
          What type of user are you?
        </h1>

        {/* User type pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {USER_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                selectedType === type
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 bg-white text-gray-600 hover:border-brand hover:text-brand dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}
              aria-pressed={selectedType === type}
            >
              {type}
            </button>
          ))}
        </div>

        {submitted ? (
          <p className="rounded bg-green-50 p-4 text-center text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Account created successfully! Welcome, {selectedType}.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name */}
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Full name"
                className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-sm text-ink placeholder-muted outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-sm text-ink placeholder-muted outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-sm text-ink placeholder-muted outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                I agree all statements in{' '}
                <a
                  href="#terms"
                  className="font-medium text-brand underline underline-offset-2 transition-colors hover:text-brand/80"
                >
                  Terms of service
                </a>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Create account
              </button>
            </div>
          </form>
        )}

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <a
            href="#login"
            className="font-medium text-brand underline underline-offset-2 transition-colors hover:text-brand/80"
          >
            Log in
          </a>
        </p>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.53 5.53 0 0 1-2.4 3.62v3h3.87c2.27-2.09 3.59-5.17 3.59-8.81z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.28a12 12 0 0 0 0 10.76l3.99-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.76c1.76 0 3.34.6 4.59 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.62l3.99 3.1C6.22 6.87 8.87 4.76 12 4.76z"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const inputClasses =
  'w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100'

export function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin')

  if (!open) {
    return null
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign in or Sign up"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-900"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
            {tab === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign-in modal"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {tab === 'signin' ? (
          <div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sign in to your account to continue
            </p>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <GoogleIcon />
                Continue with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <GithubIcon />
                Continue with GitHub
              </button>
            </div>
            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400">
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              or
              <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label
                  htmlFor="auth-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input id="auth-email" type="email" required className={inputClasses} />
              </div>
              <div>
                <label
                  htmlFor="auth-password"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input id="auth-password" type="password" required className={inputClasses} />
              </div>
              <Button type="submit" className="w-full rounded-full">
                Sign In
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Create your account to get started
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div>
                <label
                  htmlFor="auth-name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full name
                </label>
                <input id="auth-name" type="text" required className={inputClasses} />
              </div>
              <div>
                <label
                  htmlFor="auth-signup-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input id="auth-signup-email" type="email" required className={inputClasses} />
              </div>
              <div>
                <label
                  htmlFor="auth-signup-password"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  id="auth-signup-password"
                  type="password"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="auth-confirm"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Confirm password
                </label>
                <input id="auth-confirm" type="password" required className={inputClasses} />
              </div>
              <Button type="submit" className="w-full rounded-full">
                Create Account
              </Button>
            </form>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-100 pt-5 text-sm dark:border-gray-800">
          <button
            type="button"
            onClick={() => setTab('signin')}
            aria-pressed={tab === 'signin'}
            className={cn(
              'font-semibold transition-colors',
              tab === 'signin'
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-primary-600 dark:text-gray-400',
            )}
          >
            Sign in
          </button>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <button
            type="button"
            onClick={() => setTab('signup')}
            aria-pressed={tab === 'signup'}
            className={cn(
              'font-semibold transition-colors',
              tab === 'signup'
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-primary-600 dark:text-gray-400',
            )}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

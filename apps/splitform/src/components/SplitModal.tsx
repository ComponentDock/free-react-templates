import { useEffect, useRef } from 'react'
import { Button } from '@free-react-templates/ui'
import { X } from 'lucide-react'

interface SplitModalProps {
  open: boolean
  onClose: () => void
}

export function SplitModal({ open, onClose }: SplitModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="splitmodal-title"
      data-backdrop="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative mx-4 flex w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Sign In Panel */}
        <div className="flex w-1/2 flex-col p-8">
          <h2
            id="splitmodal-title"
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Sign In
          </h2>
          <form
            className="flex-1 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                Remember Me
              </label>
              <a
                href="#"
                className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Forgot Password
              </a>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
            <p className="mb-3 text-center text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Or Sign In With
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-200 dark:bg-gray-700" />

        {/* Sign Up Panel */}
        <div className="flex w-1/2 flex-col p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Sign Up</h2>
          <form
            className="flex-1 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
            By signing up, you agree to our{' '}
            <a
              href="#"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Terms
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

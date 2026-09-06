import { useEffect, useRef } from 'react'
import { Button } from '@free-react-templates/ui'
import { User, X } from 'lucide-react'

interface SignInModalProps {
  open: boolean
  onClose: () => void
}

export function SignInModal({ open, onClose }: SignInModalProps) {
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
      aria-labelledby="signin-title"
      data-backdrop="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <User className="h-8 w-8" />
          </div>

          <h2
            id="signin-title"
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Sign In
          </h2>

          <form
            className="w-full space-y-4"
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-4 flex w-full items-center justify-between text-sm">
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
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-400">Not a member? </span>
          <a
            href="#"
            className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  )
}

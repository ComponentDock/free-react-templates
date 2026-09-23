import { type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function LoginForm() {
  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Sign In to SignWell</h2>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Welcome back! Please enter your credentials to access your account.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-300 focus:ring-primary-300"
            />
            Remember me
          </label>
          <a
            href="#"
            className="text-sm font-medium text-primary-300 transition-colors hover:text-primary-400"
          >
            Forgot Password
          </a>
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-primary-300 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Log In
        </Button>
      </form>
    </div>
  )
}

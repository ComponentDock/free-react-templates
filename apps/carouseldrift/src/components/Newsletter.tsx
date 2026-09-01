import { useState, FormEvent } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 sm:py-24 bg-primary-50 dark:bg-primary-950/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-primary-200 bg-white p-8 shadow-lg text-center dark:border-primary-800 dark:bg-gray-900">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 mx-auto text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <Mail className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Get the latest travel inspiration and carousel tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-6" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                placeholder="Enter your email"
                disabled={status === 'loading' || status === 'success'}
                className={`flex-1 h-12 rounded-lg border px-4 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 ${
                  status === 'error'
                    ? 'border-red-300 text-red-900 placeholder-red-300 dark:border-red-700 dark:text-red-100 dark:placeholder-red-700'
                    : 'border-gray-200 text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:text-white dark:placeholder-gray-500'
                }`}
                aria-describedby={status === 'error' ? 'email-error' : undefined}
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading' || status === 'success'}
                className="whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Subscribing...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
            {status === 'error' && (
              <p
                id="email-error"
                className="mt-3 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            No spam, unsubscribe anytime. By subscribing you agree to our{' '}
            <a href="#" className="underline hover:text-primary-600 dark:hover:text-primary-400">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

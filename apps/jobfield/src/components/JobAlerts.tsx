import { Mail } from 'lucide-react'

export function JobAlerts() {
  return (
    <section
      id="alerts"
      className="bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 py-20 lg:py-28 dark:from-primary-900 dark:via-primary-950 dark:to-gray-950"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Never Miss an Opportunity</h2>
        <p className="mt-4 text-lg text-primary-100">
          Get new job matches delivered straight to your inbox.
        </p>

        <form
          aria-label="Job alerts"
          onSubmit={(event) => event.preventDefault()}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <label className="flex w-full max-w-md items-center gap-3 rounded-lg bg-white px-4 py-3.5 dark:bg-gray-900">
            <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50 sm:w-auto dark:bg-gray-900 dark:text-primary-300 dark:hover:bg-gray-800"
          >
            Get Job Alerts
          </button>
        </form>

        <p className="mt-4 text-sm text-primary-200">Free forever. Unsubscribe anytime. No spam.</p>
      </div>
    </section>
  )
}

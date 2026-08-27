import { Loader2 } from 'lucide-react'

export function SizesAndStates() {
  return (
    <section id="sizes" className="bg-gray-50 py-16 px-4 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Sizes &amp; States
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Small, medium, and large buttons, plus active, disabled, and loading states.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-xs font-medium text-white transition-colors hover:bg-primary-hover">
                Small
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
                Medium
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary-hover">
                Large
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              id="states"
            >
              States
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-white ring-2 ring-primary/40 ring-offset-2 transition-colors hover:bg-primary-hover">
                Active
              </button>
              <button
                disabled
                className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400"
              >
                Disabled
              </button>
              <button
                disabled
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white opacity-75"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

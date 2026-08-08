import { ShieldCheck } from 'lucide-react'

const plans = [
  'Aetna',
  'Cigna',
  'Delta Dental',
  'MetLife',
  'United Healthcare',
  'Blue Cross Blue Shield',
] as const

export function Insurance() {
  return (
    <section id="insurance" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Insurance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            We Accept Most Insurance Plans
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Making quality dental care accessible is important to us. We work with a wide range of
            insurance providers.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{plan}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">In-network provider</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-gray-600 dark:text-gray-400">
          Don't see your insurance plan? Contact us — we likely accept it or can help you find a
          solution.
        </p>
      </div>
    </section>
  )
}

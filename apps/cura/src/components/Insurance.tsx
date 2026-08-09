import { Banknote, CreditCard, ShieldCheck } from 'lucide-react'

const plans = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'UnitedHealthcare',
  'Medicare',
  'Medicaid',
] as const

export function Insurance() {
  return (
    <section
      aria-label="Insurance and payments"
      className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Insurance & Payments
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              We Work With Your Insurance
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We accept most major insurance plans and offer transparent billing with no hidden
              fees. Our billing team will verify your coverage before your first visit and help you
              understand every charge.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {plans.map((plan) => (
                <li
                  key={plan}
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-4 text-sm font-bold text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  {plan}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <CreditCard
                  className="h-5 w-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                Credit & Debit Cards
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Banknote
                  className="h-5 w-5 text-success-600 dark:text-success-400"
                  aria-hidden="true"
                />
                HSA / FSA Accepted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

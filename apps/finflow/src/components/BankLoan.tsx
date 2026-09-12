import { Landmark, Headphones } from 'lucide-react'

export function BankLoan() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/finflow-loan/700/600"
            alt="Bank loan consultation"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Loans
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Bank Loan
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Get access to flexible loan options with competitive rates to help you achieve your
            financial goals.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Landmark className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-ink dark:text-white">Bank Loan</h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">
                  Competitive rates and flexible terms for personal and business loans.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Headphones className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-ink dark:text-white">Banking Consultation</h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">
                  Free consultation with our financial advisors to plan your financial future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

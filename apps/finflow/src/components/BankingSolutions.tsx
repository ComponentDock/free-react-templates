import { Check } from 'lucide-react'

const items = [
  'Expert financial advice tailored to your needs',
  'Secure and reliable banking platforms',
  'Transparent fee structures with no hidden costs',
] as const

export function BankingSolutions() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/finflow-banking/700/600"
            alt="Banking solutions"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Banking Solutions Is Our Priority
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            We prioritize delivering innovative banking solutions that empower you to take control
            of your financial future.
          </p>
          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-mist dark:text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="bg-primary-500 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Get Your Answer In Just 5 Minutes
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Checking your loan options does not affect your credit score!
          </p>
        </div>
        <a
          href="#consultation"
          className="inline-flex shrink-0 items-center gap-2 rounded bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary-500 transition-colors hover:bg-gray-100"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

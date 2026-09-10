import { ArrowRightLeft } from 'lucide-react'

export function Converter() {
  return (
    <section
      id="convert"
      className="relative z-20 -mt-[105px] bg-gradient-to-r from-gold-start to-gold-end py-16"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mb-4 text-[30px] font-semibold text-white">The Currency Converter</h2>
          <p className="mb-8 text-[15px] font-light text-white/80">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
          {/* Bitcoin icon placeholder */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
            <ArrowRightLeft className="h-10 w-10 text-white" />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="number"
              placeholder="BTC"
              defaultValue={1}
              className="rounded-sm border border-gold-bg/50 bg-white px-5 py-3 text-sm text-dark-bg outline-none"
              aria-label="Bitcoin amount"
            />
            <div className="flex items-center justify-center text-white">
              <ArrowRightLeft className="h-5 w-5" />
            </div>
            <input
              type="number"
              placeholder="USD"
              defaultValue={12356}
              className="rounded-sm border border-gold-bg/50 bg-white px-5 py-3 text-sm text-dark-bg outline-none"
              aria-label="Dollar amount"
            />
          </div>

          <button
            type="button"
            className="rounded-sm bg-white px-8 py-3 text-sm font-medium text-dark-bg transition-colors hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
          >
            Convert Now
          </button>
        </div>
      </div>
    </section>
  )
}

import { UserCheck } from 'lucide-react'

export function SatisfactionBand() {
  return (
    <section aria-label="Satisfaction Guaranteed" className="bg-navy-band">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-6">
          <span className="flex size-14 shrink-0 items-center justify-center border border-white/30 text-white">
            <UserCheck aria-hidden="true" className="size-7" />
          </span>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium leading-tight text-white">
              Satisfaction Guaranteed
            </h2>
            <p className="mt-3 text-base font-light leading-relaxed text-on-navy">
              We understand the complexities of modern markets and translate them into real business
              solutions for automotive, financial, insurance, pharma &amp; life sciences.
            </p>
          </div>
        </div>
        <a
          href="#services"
          className="inline-block shrink-0 border-2 border-white px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy-band"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

import { ctaStrip } from '../data'

export function CtaStrip() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-medium text-white">{ctaStrip.heading}</h2>
          <p className="mt-1 text-white/80">{ctaStrip.subtext}</p>
        </div>
        <div className="w-full border-white/30 lg:w-auto lg:border-l lg:pl-10">
          <a
            href="#contactme"
            className="block whitespace-nowrap rounded border border-white/70 py-3 text-center font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
          >
            {ctaStrip.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

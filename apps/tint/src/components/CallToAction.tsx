import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="bg-navy-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-400">
              Get a quick response from our team
            </span>
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-condensed)] md:text-4xl">
              Get to Know Project Estimate?
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-500"
          >
            Get a quote now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

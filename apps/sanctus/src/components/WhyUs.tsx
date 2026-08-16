import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { whyUs } from '../data'

export function WhyUs() {
  return (
    <section className="bg-deep py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.1em] text-brand">
              {whyUs.subheading}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{whyUs.heading}</h2>
          </div>
          <p className="text-white/80 lg:text-right">{whyUs.paragraph}</p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={whyUs.image}
              alt={whyUs.imageAlt}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
            <button
              type="button"
              aria-label={whyUs.playLabel}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Play className="ml-1 h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div>
            <div className="grid gap-8 sm:grid-cols-2">
              {whyUs.features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{feature.copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-10">
              <ButtonLink
                href="#contact"
                className="rounded-[30px] border-2 border-transparent bg-brand px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:border-transparent hover:bg-white hover:text-brand hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
              >
                {whyUs.ctaLabel}
              </ButtonLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ButtonLink } from '@free-react-templates/ui'
import { features, featureSectionCopy } from '../data'

/** Emblem features: centered kicker + H2 header, three pale-blue cards
 *  (icon + title + blurb) and a centered View All Services pill. */
export function Features() {
  return (
    <section id="features" aria-label="Features" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="text-[13px] font-bold uppercase tracking-widest text-[#ccc]">
          {featureSectionCopy.kicker}
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-light text-ink lg:text-4xl">
          {featureSectionCopy.heading}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-feature px-8 py-8 text-left transition-transform hover:-translate-y-1"
            >
              <feature.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-feature-body">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
        <ButtonLink
          href="#services"
          className="mt-12 inline-flex rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2rem]"
        >
          {featureSectionCopy.cta}
        </ButtonLink>
      </div>
    </section>
  )
}

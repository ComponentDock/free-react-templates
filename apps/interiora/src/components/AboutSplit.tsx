import { ABOUT_SPLIT } from '../data'
import { PillLink } from './Pill'

/* AboutSplit — image/text split with an orange-outline Learn More pill. */
export function AboutSplit() {
  return (
    <section aria-label="About" id="about" className="bg-paper py-24 lg:py-[120px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            {ABOUT_SPLIT.eyebrow}
          </p>
          <h2 className="font-display text-[34px] font-medium leading-tight text-ink">
            {ABOUT_SPLIT.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body">{ABOUT_SPLIT.text}</p>
          <PillLink href="#services" variant="outline" className="mt-8">
            {ABOUT_SPLIT.ctaLabel}
          </PillLink>
        </div>
        <img
          src={ABOUT_SPLIT.image}
          alt="Design the home you love illustration"
          width={640}
          height={520}
          className="order-1 w-full rounded-lg object-cover shadow-lg lg:order-2"
        />
      </div>
    </section>
  )
}

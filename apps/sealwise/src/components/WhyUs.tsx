import { whyUs } from '../content'
import { Diagram } from './Diagram'
import { Reveal, SectionIntro, containerClass } from './ui'
import { cn } from '@free-react-templates/ui'

/** The figure comes first on `lg`; the four commitments face it. */
export function WhyUs() {
  return (
    <section id="why-us" className="section scroll-mt-20 bg-ink-50 dark:bg-gray-900">
      <div className={cn(containerClass, 'grid items-center gap-12 lg:grid-cols-2 lg:gap-16')}>
        <Reveal className="order-last lg:order-first">
          <figure>
            <Diagram />
            <figcaption className="mt-3 text-sm leading-5 text-ink-500 dark:text-ink-300">
              {whyUs.caption}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <SectionIntro kicker={whyUs.kicker} title={whyUs.title} lead={whyUs.lead} width="max-w-3xl" />
          <dl className="mt-8 space-y-6">
            {whyUs.commitments.map((commitment) => (
              <div key={commitment.term}>
                <dt className="text-base leading-6 font-bold text-ink-800 dark:text-ink-50">
                  {commitment.term}
                </dt>
                <dd className="mt-1 text-base leading-6 text-ink-500 dark:text-ink-300">
                  {commitment.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

import { WHY_US } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * The argument band: a 4:3 photograph of the test itself on the left (the
 * figure comes last on a phone), four commitments on the right, each marked
 * with a 2 px sage rule rather than a card.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50 dark:bg-gray-950">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <figure className="order-last lg:order-first">
          <img
            src={WHY_US.image}
            alt={WHY_US.imageAlt}
            width={1152}
            height={864}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm leading-5 text-ink-400 dark:text-gray-400">
            {WHY_US.figcaption}
          </figcaption>
        </figure>

        <div>
          <Eyebrow weight="bold">{WHY_US.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-10 tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {WHY_US.heading}
          </h2>
          <p className="mt-4 text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
            {WHY_US.lede}
          </p>
          <dl className="mt-8 space-y-6">
            {WHY_US.commitments.map((commitment) => (
              <div key={commitment.term} className="border-l-2 border-primary-600 pl-5">
                <dt className="text-base font-bold leading-6 text-ink-800 dark:text-white">
                  {commitment.term}
                </dt>
                <dd className="mt-1 text-base leading-6 text-ink-500 dark:text-gray-300">
                  {commitment.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

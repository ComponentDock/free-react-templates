import { whyUs } from '../content'
import { Eyebrow, containerClass, sectionClass } from './ui'

/**
 * The only image on the page, and it is drawn rather than photographed: a plate
 * with the old pipe left in the ground and the cured liner inside it. Everything
 * here is geometry, so it scales and it can be read at any width.
 */
export function LinerPanel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="A diagram of a liner inside an existing pipe, with two access points"
      className={className}
    >
      <title>A pipe inside the pipe</title>
      <rect width="800" height="600" rx="24" fill="#161614" />
      <rect x="16" y="16" width="768" height="568" rx="16" fill="#242420" />

      <text
        x="48"
        y="76"
        fill="#f6f6f4"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="26"
        fontWeight="700"
      >
        A pipe inside the pipe
      </text>

      <rect x="48" y="150" width="704" height="26" rx="4" fill="#4a4a40" />
      <text x="672" y="142" fill="#848475" fontSize="13" fontFamily="Inter, sans-serif">
        Ground level
      </text>

      <rect x="48" y="300" width="704" height="120" rx="60" fill="#383830" />
      <rect x="70" y="320" width="660" height="80" rx="40" fill="#b4643b" />
      <rect x="92" y="340" width="616" height="40" rx="20" fill="#161614" />

      <rect x="146" y="176" width="34" height="124" rx="6" fill="#f6f6f4" />
      <rect x="620" y="176" width="34" height="124" rx="6" fill="#f6f6f4" />
      <text
        x="136"
        y="212"
        fill="#b2b2a6"
        fontSize="12"
        fontFamily="Inter, sans-serif"
        textAnchor="end"
      >
        access point
      </text>
      <text x="670" y="212" fill="#b2b2a6" fontSize="12" fontFamily="Inter, sans-serif">
        access point
      </text>

      <rect x="48" y="486" width="18" height="18" rx="3" fill="#383830" />
      <text x="78" y="501" fill="#b2b2a6" fontSize="13" fontFamily="Inter, sans-serif">
        the old pipe, left in the ground
      </text>
      <rect x="48" y="518" width="18" height="18" rx="3" fill="#b4643b" />
      <text x="78" y="533" fill="#b2b2a6" fontSize="13" fontFamily="Inter, sans-serif">
        the cured liner, jointless
      </text>
    </svg>
  )
}

export function WhyUs() {
  return (
    <section id="why-us" className={`bg-ink-50 ${sectionClass} dark:bg-gray-900`}>
      <div className={containerClass}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <LinerPanel className="h-auto w-full rounded-2xl" />
            <figcaption className="mt-3 text-sm leading-5 text-ink-400 dark:text-gray-500">
              {whyUs.caption}
            </figcaption>
          </figure>

          <div>
            <Eyebrow>{whyUs.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-ink-800 sm:text-4xl sm:leading-10 dark:text-white">
              {whyUs.title}
            </h2>
            <p className="mt-4 text-lg leading-7 text-ink-500 dark:text-gray-400">{whyUs.lead}</p>

            <dl className="mt-8 space-y-6">
              {whyUs.rules.map((rule) => (
                <div key={rule.term} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-base leading-6 font-bold text-ink-800 dark:text-white">
                    {rule.term}
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-ink-500 dark:text-gray-400">
                    {rule.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

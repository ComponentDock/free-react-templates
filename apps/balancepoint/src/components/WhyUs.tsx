import { CHART, MECHANISMS, WHY_US_COPY } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * The page's only picture: a chart of output against temperature, drawn in the
 * page's own tokens. It is load-bearing — the balance point is what "below
 * here, backup makes up the difference" means.
 */
function BalanceChart() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={CHART.alt}
      className="h-auto w-full rounded-2xl"
    >
      <rect width="800" height="600" rx="16" className="fill-ink-900" />
      <rect x="20" y="20" width="760" height="560" rx="24" className="fill-ink-800" />

      <text x="56" y="80" className="fill-white font-sans text-[22px] font-bold">
        {CHART.title}
      </text>

      {/* axes */}
      <line x1="88" y1="140" x2="88" y2="470" className="stroke-ink-700" strokeWidth="1.5" />
      <line x1="88" y1="470" x2="716" y2="470" className="stroke-ink-700" strokeWidth="1.5" />

      {/* house loss: steepest at the cold end */}
      <line
        x1="88"
        y1="180"
        x2="716"
        y2="452"
        className="stroke-ink-300"
        strokeWidth="2"
        strokeDasharray="7 6"
      />
      <text x="96" y="168" className="fill-ink-300 font-sans text-[14px]">
        {CHART.losses}
      </text>

      {/* capacity: usable output rises with outdoor temperature */}
      <path
        d="M88 340 C 200 336 260 300 340 268 S 520 214 716 196"
        fill="none"
        className="stroke-primary-400"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* the balance point where the two meet */}
      <line
        x1="340"
        y1="268"
        x2="340"
        y2="470"
        className="stroke-primary-400/40"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="340" cy="268" r="7" className="fill-primary-400" />
      <text x="356" y="258" className="fill-primary-300 font-sans text-[14px] font-semibold">
        {CHART.balancePoint}
      </text>
      <text x="96" y="306" className="fill-primary-300 font-sans text-[13px]">
        {CHART.backup}
      </text>

      {/* temperature ticks, mono because they are figures */}
      {CHART.ticks.map((tick, index) => {
        const x = 88 + index * (628 / 3)
        return (
          <g key={tick}>
            <line x1={x} y1="470" x2={x} y2="478" className="stroke-ink-600" strokeWidth="1.5" />
            <text
              x={x}
              y="500"
              textAnchor={index === 0 ? 'start' : index === 3 ? 'end' : 'middle'}
              className="fill-ink-400 font-mono text-[13px]"
            >
              {tick}
            </text>
          </g>
        )
      })}

      <text x="56" y="552" className="fill-ink-400 font-sans text-[13px]">
        {CHART.footnote}
      </text>
    </svg>
  )
}

/** Grey band: the chart on the left, four mechanisms on lime-ruled `dl` rows. */
export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50 dark:bg-gray-900">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <figure className="order-last m-0 lg:order-first">
          <BalanceChart />
          <figcaption className="mt-3 text-sm text-ink-400 dark:text-gray-400">
            {WHY_US_COPY.figcaption}
          </figcaption>
        </figure>

        <div>
          <Eyebrow>{WHY_US_COPY.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {WHY_US_COPY.heading}
          </h2>
          <p className="mt-3 text-lg leading-7 text-ink-500 dark:text-gray-300">
            {WHY_US_COPY.lede}
          </p>

          <dl className="mt-8 space-y-6">
            {MECHANISMS.map((mechanism) => (
              <div key={mechanism.title} className="border-l-2 border-primary-600 pl-5">
                <dt className="text-base font-bold leading-6 text-ink-800 dark:text-white">
                  {mechanism.title}
                </dt>
                <dd className="mt-1 text-base leading-7 text-ink-500 dark:text-gray-300">
                  {mechanism.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

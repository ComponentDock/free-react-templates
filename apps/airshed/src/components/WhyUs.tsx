import { CHART, WHY } from '../content'
import { BandHeading, Container, Reveal } from './ui'

/**
 * The one image slot on the page: a 4:3 panel drawn as a local SVG rather than
 * a photograph, because the design carries none. A dark card holds a week of
 * logged carbon-dioxide readings — a flat daytime floor and one overnight spike
 * per night — under a dashed 1,200 ppm threshold, so the copy's claim ("the fix
 * is a grille, not a purifier") is visible before it is read.
 */
function AirPanel() {
  return (
    <svg
      role="img"
      aria-label={CHART.alt}
      viewBox="0 0 800 600"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="600" className="fill-ink-900" />
      <rect x="32" y="32" width="736" height="536" rx="24" className="fill-ink-800" />

      <text
        x="76"
        y="96"
        fontSize="23"
        fontWeight="700"
        className="fill-white"
        fontFamily="inherit"
      >
        {CHART.title}
      </text>
      <text x="76" y="124" fontSize="14" className="fill-ink-400" fontFamily="inherit">
        {CHART.subtitle}
      </text>

      <g className="stroke-ink-700" strokeWidth="2">
        <path d="M110 470h600M110 170v300" />
      </g>

      <path d="M110 300h600" className="stroke-ink-400" strokeWidth="2" strokeDasharray="7 7" />
      <text x="596" y="292" fontSize="13" className="fill-ink-300" fontFamily="inherit">
        {CHART.threshold}
      </text>

      <path
        d="M110 428 L150 428 L168 214 L196 210 L220 428 L262 428 L280 202 L308 208 L332 428 L374 428 L392 198 L420 206 L444 428 L486 428 L504 212 L532 218 L556 428 L598 428 L616 196 L644 204 L668 428 L710 428"
        fill="none"
        strokeWidth="4"
        strokeLinejoin="round"
        className="stroke-primary-400"
      />

      <g fontSize="12" className="fill-ink-500" fontFamily="inherit">
        {CHART.days.map((day, i) => (
          <text key={day} x={150 + i * 115} y="494">
            {day}
          </text>
        ))}
      </g>

      <text x="110" y="540" fontSize="15" className="fill-ink-300" fontFamily="inherit">
        {CHART.footnote}
      </text>
    </svg>
  )
}

/**
 * The awkward part: a 4:3 figure on the left, four left-bordered principles on
 * the right, and the figure drops below the copy on a phone.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50 dark:bg-gray-900">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-last lg:order-first">
          <figure>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <AirPanel />
            </div>
            <figcaption className="mt-3 text-sm leading-5 text-ink-400 dark:text-gray-400">
              {CHART.caption}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <BandHeading eyebrow={WHY.eyebrow} heading={WHY.heading} lede={WHY.lede} />
          <dl className="mt-8 space-y-6">
            {WHY.principles.map((principle) => (
              <div
                key={principle.title}
                className="border-l-2 border-primary-600 pl-5 dark:border-primary-400"
              >
                <dt className="text-base font-bold leading-6 text-ink-800 dark:text-white">
                  {principle.title}
                </dt>
                <dd className="mt-1 text-base leading-6 text-ink-500 dark:text-gray-300">
                  {principle.body}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

import { CLAIMS, WHY_CAPTION, WHY_EYEBROW, WHY_HEADING, WHY_LEDE } from '../content'
import { Reveal } from './Reveal'

/**
 * The day, by window — drawn here rather than shipped as an asset: an ink plate
 * with one bar per shift (daytime red, evening deep red, overnight ice-blue),
 * the promise inside each bar and the four clock ticks along the bottom.
 */
function DayWindowDiagram() {
  const bars = [
    { y: 176, width: 436, fill: '#ee3b3b', label: 'Weekday daytime', promise: 'within 2 hours' },
    { y: 268, width: 336, fill: '#b11717', label: 'Evenings to 10pm', promise: 'within 3 hours' },
    { y: 360, width: 236, fill: '#285a7c', label: 'Overnight', promise: 'first call at 7am' },
  ]

  return (
    <svg
      role="img"
      aria-label="The day, by window: within two hours on the weekday daytime shift, within three hours in the evening, first call at 7am overnight"
      viewBox="0 0 800 600"
      className="w-full rounded-2xl"
    >
      <rect width="800" height="600" rx="24" fill="#14171d" />
      <rect x="40" y="40" width="720" height="520" rx="24" fill="#20242d" />
      <text x="88" y="116" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">
        The day, by window
      </text>
      {bars.map((bar) => (
        <g key={bar.label}>
          <rect x="88" y={bar.y} width={bar.width} height="52" rx="12" fill={bar.fill} />
          <text
            x="108"
            y={bar.y + 32}
            fill="#ffffff"
            fontSize="15"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            {bar.label}
          </text>
          <text
            x="752"
            y={bar.y + 32}
            textAnchor="end"
            fill="#d6dae0"
            fontSize="14"
            fontFamily="'JetBrains Mono', monospace"
          >
            {bar.promise}
          </text>
        </g>
      ))}
      {['07:00', '17:00', '22:00', '07:00'].map((tick, index) => (
        <g key={`${tick}-${index}`}>
          <line
            x1={88 + index * 200}
            y1="468"
            x2={88 + index * 200}
            y2="480"
            stroke="#7e8898"
            strokeWidth="1.5"
          />
          <text
            x={88 + index * 200}
            y="502"
            fill="#7e8898"
            fontSize="13"
            fontFamily="'JetBrains Mono', monospace"
          >
            {tick}
          </text>
        </g>
      ))}
      <text
        x="88"
        y="536"
        fill="#5d6879"
        fontSize="13"
        fontFamily="Inter, sans-serif"
      >
        Published per shift, not one number for the day.
      </text>
    </svg>
  )
}

export function WhyUs() {
  return (
    <section id="why-us" className="section bg-ink-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <DayWindowDiagram />
            <figcaption className="mt-3 text-sm text-ink-400">{WHY_CAPTION}</figcaption>
          </figure>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
              {WHY_EYEBROW}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              {WHY_HEADING}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{WHY_LEDE}</p>
            <dl className="mt-8 space-y-6">
              {CLAIMS.map((claim) => (
                <div key={claim.term} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-base font-bold text-ink-800">{claim.term}</dt>
                  <dd className="mt-1 text-ink-500">{claim.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

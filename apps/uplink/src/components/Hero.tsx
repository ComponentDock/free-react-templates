import { ButtonLink } from '@free-react-templates/ui'

/** Purple split hero: headline + CTA left, server illustration right. */
export function Hero() {
  return (
    <section id="home" className="bg-primary-500">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <h1 className="text-3xl font-medium text-white uppercase sm:text-4xl lg:text-5xl">
            We&rsquo;re Web Hosting Professionals
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 font-light text-white opacity-60">
            Fast, reliable and affordable hosting for every website, backed by round-the-clock
            expert support and a 99.9% uptime promise.
          </p>
          <ButtonLink
            href="#features"
            className="mt-10 rounded-[5px] bg-accent-500 px-12 text-white hover:bg-accent-600"
          >
            Explore Our Features
          </ButtonLink>
        </div>

        {/* Dotted-map backdrop + server rack illustration (original SVG) */}
        <div
          role="img"
          aria-label="Illustration of a server rack with status lights"
          className="relative bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_1.5px,transparent_1.5px)] bg-[length:26px_26px]"
        >
          <svg viewBox="0 0 320 280" className="mx-auto w-full max-w-md" aria-hidden="true">
            {/* rack frame */}
            <rect x="70" y="16" width="180" height="236" rx="10" fill="#2a1d6b" />
            <rect
              x="70"
              y="16"
              width="180"
              height="236"
              rx="10"
              fill="none"
              stroke="#8a76ea"
              strokeWidth="2"
            />
            {/* rack units with status lights */}
            {[36, 100, 164].map((y) => (
              <g key={y}>
                <rect x="90" y={y} width="140" height="46" rx="6" fill="#352388" />
                <circle cx="110" cy={y + 23} r="5" fill="#4ade80" />
                <circle cx="128" cy={y + 23} r="5" fill="#fbbf24" />
                <rect x="146" y={y + 13} width="68" height="20" rx="3" fill="#1b1447" />
              </g>
            ))}
            {/* database cylinder */}
            <ellipse cx="160" cy="244" rx="48" ry="10" fill="#8a76ea" />
            <path
              d="M112 244 v-18 a48 10 0 0 1 96 0 v18"
              fill="none"
              stroke="#c9c0f6"
              strokeWidth="3"
            />
            <ellipse cx="160" cy="226" rx="48" ry="10" fill="#c9c0f6" />
            {/* orbiting dots (map hint) */}
            <circle cx="52" cy="60" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="268" cy="48" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="290" cy="140" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="38" cy="200" r="4" fill="#ffffff" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

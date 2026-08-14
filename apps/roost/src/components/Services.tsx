import { ABOUT_ROWS, SERVICES } from '../data'

/* Inline SVG icons (source used icomoon/flaticon icon fonts — not
   copyable; lucide has no matching glyphs for these, so hand-rolled
   stroke icons keep the same 3rem/4rem green-icon look). */
const SERVICE_ICON_PATHS: Record<string, string> = {
  shield: 'M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z',
  bathtub: 'M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2zM6 12V6a2 2 0 0 1 4 0M2 12h20',
  wind: 'M3 8h9a3 3 0 1 0-3-3M3 12h13a3 3 0 1 1-3 3M3 16h6',
  calculator:
    'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 7h6M9 11h2M13 11h2M9 15h2M13 15h2M9 19h2M13 19h2',
}

interface ServiceIconProps {
  name: string
  className?: string
}

function ServiceIcon({ name, className }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={ALL_ICON_PATHS[name]} />
    </svg>
  )
}

const ABOUT_ICON_PATHS: Record<string, string> = {
  Mission: 'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4',
  Vision: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
}

const ALL_ICON_PATHS: Record<string, string> = {
  ...SERVICE_ICON_PATHS,
  ...ABOUT_ICON_PATHS,
}

/* Services (source: div.site-section row — a black p-5 box with a 2×2
   grid of icon services on the left, and an "About Us" column with two
   4rem-icon rows — Mission / Vision — on the right). */
export function Services() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-12 px-[15px] lg:flex-row">
        <div className="bg-ink p-8 lg:w-1/2">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.title} className="text-center">
                <ServiceIcon name={service.icon} className="mx-auto h-12 w-12 text-brand" />
                <h3 className="mt-3 text-[15px] font-medium uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/60">{service.caption}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto lg:w-5/12">
          <div className="mb-6 h-[2px] w-[70px] bg-brand" aria-hidden="true" />
          <h2 className="text-[22px] font-semibold uppercase text-ink">About Us</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            We help families find, sell, and finance the homes they love — with local knowledge and
            honest advice at every step.
          </p>

          <ul className="mt-10 space-y-8">
            {ABOUT_ROWS.map((row) => (
              <li key={row.title} className="flex items-start gap-4">
                <ServiceIcon name={row.title} className="h-14 w-14 shrink-0 text-brand" />
                <div>
                  <h3 className="text-[18px] font-semibold text-ink">{row.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{row.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

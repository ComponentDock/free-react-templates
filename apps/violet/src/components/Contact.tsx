import { Mail, MapPin, Phone } from 'lucide-react'

const pins = [
  { label: 'New York', x: '18%', y: '35%' },
  { label: 'London', x: '42%', y: '28%' },
  { label: 'Dubai', x: '58%', y: '38%' },
  { label: 'Singapore', x: '78%', y: '52%' },
] as const

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="bg-primary-50/50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
              Get in touch, send us an e-mail or call us
            </h2>
            <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
              Aenean pellentesque elit vitae ex mauris, ornare eget pretium. Cras ex mauris, ornare
              eget pretium, imperdiet in nulla.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="mailto:hello@violet.app"
                  className="inline-flex items-center gap-3 font-medium text-ink transition-colors hover:text-primary-400 dark:text-gray-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-primary-400 text-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  hello@violet.app
                </a>
              </li>
              <li>
                <a
                  href="tel:+15550132026"
                  className="inline-flex items-center gap-3 font-medium text-ink transition-colors hover:text-primary-400 dark:text-gray-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-primary-400 text-white">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  +1 (555) 013-2026
                </a>
              </li>
            </ul>
          </div>

          <div
            aria-label="Used worldwide"
            className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white p-10 dark:border-gray-800 dark:bg-gray-950"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #9b8aff 1.5px, transparent 1.5px)',
                backgroundSize: '26px 26px',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="font-display text-xl font-semibold text-ink dark:text-gray-100">
                Used worldwide
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                Join hundreds of startups on every continent, from New York to Singapore.
              </p>
              <ul className="relative mt-10 h-56">
                {pins.map((pin) => (
                  <li
                    key={pin.label}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ left: pin.x, top: pin.y }}
                  >
                    <MapPin className="h-7 w-7 text-primary-400" aria-hidden="true" />
                    <span className="rounded-full bg-primary-400 px-2 py-0.5 text-xs font-semibold text-white">
                      {pin.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

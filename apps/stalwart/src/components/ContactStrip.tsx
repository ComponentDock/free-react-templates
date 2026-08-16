import { Clock, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { contactStrip } from '../data'

type StripTitle = (typeof contactStrip)[number]['title']

const icons: { [K in StripTitle]: LucideIcon } = {
  'Call Us': Phone,
  Location: MapPin,
  'Opening Hour': Clock,
}

/** Red strip overlapping the hero's bottom edge: a white "We are here to
 *  help you" box on the left and three contact-info columns. */
export function ContactStrip() {
  return (
    <section
      aria-label="Contact information"
      className="relative z-10 -mt-36 bg-brand px-6 pb-14 pt-16 lg:ml-[14%]"
    >
      <div className="flex flex-wrap items-stretch gap-10 lg:gap-0">
        <div className="bg-white px-9 py-8 lg:w-[30%]">
          <h2 className="font-display text-4xl font-semibold uppercase leading-tight text-ink">
            We are here
            <br />
            to help you
          </h2>
        </div>
        {contactStrip.map((item) => {
          const Icon = icons[item.title]
          return (
            <div key={item.title} className="flex items-start gap-4 lg:w-[23%]">
              <span className="mt-1 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-base font-light leading-relaxed text-white/90">{item.line1}</p>
                <p className="text-base font-light leading-relaxed text-white/90">{item.line2}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

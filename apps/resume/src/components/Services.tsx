import { Briefcase, Megaphone, PenTool } from 'lucide-react'
import { services } from '../data'

const icons = {
  pen: PenTool,
  megaphone: Megaphone,
  briefcase: Briefcase,
} as const

/** Services section: centered heading + three cards with a circular blush
 *  icon circle (accent icon), title, and description. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl font-semibold text-ink lg:text-[48px] lg:leading-tight">
          {services.heading}
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-md border border-line px-[22px] py-[61px] text-center transition-shadow hover:shadow-lg"
              >
                <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blush">
                  <Icon className="h-[50px] w-[50px] text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

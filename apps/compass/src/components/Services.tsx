import { ArrowRight, Clock, Gem, LifeBuoy, Palette, Puzzle, Zap } from 'lucide-react'
import { services } from '../data'

const icons = [Palette, Clock, Zap, LifeBuoy, Gem, Puzzle]

/* Services: a light-gray band with six icon cards, each with a title,
 * paragraph and "Learn More" link (source #services-section). */
export function Services() {
  return (
    <section
      id="services"
      data-testid="services"
      className="border-b border-line bg-mist py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="text-center text-4xl font-black leading-tight text-brand md:text-[40px]">
          {services.title}
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => {
            const Icon = icons[index]!
            return (
              <div key={item.title} className="bg-white p-8 shadow-sm">
                <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-smoke">{item.text}</p>
                <a
                  href={services.learnMoreHref}
                  className="mt-4 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:underline"
                >
                  {services.learnMoreLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

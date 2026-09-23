import { Landmark, HeartPulse, Users, Shield } from 'lucide-react'
import { practiceAreas } from '../data'

const iconMap = { Landmark, HeartPulse, Users, Shield }

/** Four-column practice areas with image bg + icon + description. */
export function PracticeAreas() {
  return (
    <section id="practice" className="bg-mist pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Practice Areas
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink md:text-4xl">
            What We Cover
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = iconMap[area.icon]
            return (
              <div key={area.title} className="group overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-brand/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-body">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import {
  Banknote,
  Briefcase,
  Flame,
  Gavel,
  Home,
  Scale,
  Shield,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { practiceAreas } from '../data'

const icons: Record<string, LucideIcon> = {
  Scale,
  Briefcase,
  Shield,
  Gavel,
  Home,
  Users,
  Flame,
  Banknote,
}

/** Centered-heading section with an 8-tile 4-column grid of practice areas;
 *  tiles separated by hairline borders, icons flip to black-on-white on
 *  hover. */
export function PracticeAreas() {
  return (
    <section id="practice" aria-label="Practice areas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Practice Areas</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Practice Areas</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = icons[area.icon]!
            return (
              <div key={area.title} className="group bg-white p-7 text-center">
                <span className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-white group-hover:text-gray-900">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

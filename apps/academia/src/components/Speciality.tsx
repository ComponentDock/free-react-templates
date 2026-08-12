import { Award, Briefcase, Crown, Palette } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SPECIALITIES } from '../data'

/* Our Course Speciality (source: div.our_courses — four cards with circular
   icon badges alternating purple/teal glyphs). The demo repeats the same
   heading on every card; the recreation varies the titles in kind. */
const ICONS = [Palette, Briefcase, Award, Crown]

export function Speciality() {
  return (
    <section id="speciality" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-16 text-center">
          <h2 className="text-[46px] font-normal text-ink">Our Course Speciality</h2>
          <p className="mx-auto mt-4 max-w-[560px] font-serif text-[17px] text-smoke">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SPECIALITIES.map((item, index) => {
            const Icon = ICONS[index]!
            return (
              <article key={item.title} className="text-center">
                <div
                  data-icon-badge={item.tone}
                  className={cn(
                    'mx-auto flex h-24 w-24 items-center justify-center rounded-full',
                    item.tone === 'iris' ? 'bg-iris/15' : 'bg-brand/15',
                  )}
                >
                  <Icon
                    className={cn('h-10 w-10', item.tone === 'iris' ? 'text-iris' : 'text-brand')}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-[18px] font-normal text-ink">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-[260px] font-serif text-[16px] leading-6 text-smoke">
                  {item.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

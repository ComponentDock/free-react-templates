import { Apple, Award, Dumbbell, HandHeart, Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CERTIFIED, SERVICES } from '../data'

const iconMap: Record<string, LucideIcon> = {
  apple: Apple,
  dumbbell: Dumbbell,
  heart: Heart,
  'hand-heart': HandHeart,
}

/** Services strip — four green-icon service cards plus a certified counter
    card ("24 Years of experienced"). */
export function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-5 sm:px-6">
        {SERVICES.map(({ title, icon, blurb }) => {
          const Icon = iconMap[icon]!
          return (
            <article key={title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/50">{blurb}</p>
            </article>
          )
        })}

        <article className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand">
            <Award className="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-dark">{CERTIFIED.label}</h3>
          <p className="font-display text-5xl text-dark">{CERTIFIED.count}</p>
          <p className="mt-1 text-sm text-black/50">{CERTIFIED.caption}</p>
        </article>
      </div>
    </section>
  )
}

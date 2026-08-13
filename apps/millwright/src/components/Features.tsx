import { Bookmark, Heart, Leaf, type LucideIcon } from 'lucide-react'
import { features } from '../data'

const icons: Record<string, LucideIcon> = {
  bookmark: Bookmark,
  heart: Heart,
  leaf: Leaf,
}

/** Light-background features row (reference `.section.bg-light`): NO section
 *  heading — three centered icon blocks: Automotive Parts, Maintenance
 *  Services, Green Energy. */
export function Features() {
  return (
    <section className="bg-surface py-[7rem]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3 lg:px-8">
        {features.map((feature) => {
          const Icon = icons[feature.icon]!
          return (
            <article key={feature.title} className="text-center">
              <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center">
                <Icon className="h-[50px] w-[50px] text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-base leading-relaxed text-gray-500">
                {feature.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

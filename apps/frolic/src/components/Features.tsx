import { Cog, Home, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { features } from '../data'

const iconMap = {
  home: Home,
  user: User,
  cog: Cog,
} as const

const blockColors: Record<string, string> = {
  coral: 'bg-coral',
  sunflower: 'bg-sunflower',
  lagoon: 'bg-lagoon',
}

/** Feature blocks (reference `.block-2` row): three colored cards, each with
 *  an 80px circle of the block color sticking up over the top edge and a
 *  white icon glyph inside. */
export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8">
        {features.map(({ color, icon, title, text }) => {
          const Icon = iconMap[icon]
          return (
            <article
              key={title}
              className={cn('px-10 pt-16 pb-10 text-center text-white', blockColors[color])}
            >
              <span
                className={cn(
                  'mx-auto -mt-[70px] mb-[30px] flex h-20 w-20 items-center justify-center rounded-full',
                  blockColors[color],
                )}
              >
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <p className="mt-4 text-white/70">{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

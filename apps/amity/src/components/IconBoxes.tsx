import { HandCoins, HeartHandshake, Sprout } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { iconBoxes, type IconBox } from '../data'

const icons: Record<IconBox['icon'], typeof Sprout> = {
  sprout: Sprout,
  handshake: HeartHandshake,
  handcoins: HandCoins,
}

export function IconBoxes() {
  return (
    <section aria-label="Ways to get involved" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:px-8">
        {iconBoxes.map((box) => {
          const Icon = icons[box.icon]
          return (
            <article
              key={box.title}
              data-icon-card
              className={cn(
                'group rounded-[24px] p-10 text-center transition-colors',
                box.active
                  ? 'bg-gradient-to-r from-brand to-brand-dark text-white'
                  : 'bg-light text-ink hover:bg-gradient-to-r hover:from-brand hover:to-brand-dark hover:text-white',
              )}
            >
              <Icon
                className={cn(
                  'mx-auto h-12 w-12 transition-colors',
                  box.active ? 'text-white' : 'text-ink group-hover:text-white',
                )}
                aria-hidden="true"
              />
              <h3 className="mt-7 text-[24px] font-semibold">{box.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.8] opacity-80">{box.blurb}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

import { Droplets, Fence, Scissors, Sprout, Trash2, Trees } from 'lucide-react'
import type { ComponentType } from 'react'
import { CATEGORIES, PROMO_LINE } from '../data'
import type { CategoryIcon } from '../data'
import { cn } from '@free-react-templates/ui'

const CATEGORY_ICONS: Record<CategoryIcon, ComponentType<{ className?: string }>> = {
  trees: Trees,
  sprout: Sprout,
  droplets: Droplets,
  fence: Fence,
  trash: Trash2,
  scissors: Scissors,
}

/* Categories — mint strip of six white-translucent cards with line icons,
   titles, and blurbs, plus a centered promo line with a green quote link. */
export function Categories() {
  return (
    <section aria-label="Categories" className="bg-mint pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon]
            return (
              <article
                key={category.title}
                className={cn(
                  'rounded-[5px] bg-white/50 px-5 pb-6 pt-7 text-center transition-all',
                  'hover:bg-paper hover:shadow-[0_20px_30px_rgba(35,47,85,0.1)]',
                )}
              >
                <Icon className="mx-auto h-10 w-10 text-garden" aria-hidden="true" />
                <h3 className="mt-4 text-[22px] font-medium text-forest transition-colors hover:text-garden hover:underline">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{category.blurb}</p>
              </article>
            )
          })}
        </div>
        <p className="mt-14 text-center text-xl text-forest">
          {PROMO_LINE.lead}{' '}
          <a
            href={PROMO_LINE.href}
            className="font-semibold text-garden underline transition-colors hover:text-bright"
          >
            {PROMO_LINE.link}
          </a>
        </p>
      </div>
    </section>
  )
}

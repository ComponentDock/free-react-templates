import {
  Calculator,
  Code2,
  GraduationCap,
  HeartPulse,
  Palette,
  UtensilsCrossed,
} from 'lucide-react'
import { TOP_CATEGORIES } from '../data'
import { cn } from '@free-react-templates/ui'

const CATEGORY_ICONS = {
  code: Code2,
  graduation: GraduationCap,
  palette: Palette,
  calculator: Calculator,
  utensils: UtensilsCrossed,
  'heart-pulse': HeartPulse,
}

/* White category strip overlapping the hero's bottom edge (negative top
   margin ≥lg): six cards with a blue 40px icon, 20px title and "143 Open
   position" caption. The second card (Education & Training) renders
   active with an orange #fdab44 background; hovering any card turns it
   brand blue. */
export function TopCategories() {
  return (
    <section aria-label="Top categories" className="px-4">
      <div className="relative z-10 mx-auto -mt-0 max-w-6xl bg-white shadow-[0_3px_14px_-4px_rgba(0,0,0,0.1)] lg:-mt-[70px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {TOP_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon]
            return (
              <a
                key={category.name}
                href="#"
                className={cn(
                  'group block p-5 text-center transition-colors',
                  category.active ? 'bg-accent' : 'hover:bg-brand',
                )}
              >
                <Icon
                  className={cn(
                    'mx-auto h-10 w-10 transition-colors',
                    category.active ? 'text-white' : 'text-brand group-hover:text-white',
                  )}
                  aria-hidden="true"
                />
                <h3
                  className={cn(
                    'mt-3 text-[20px] font-medium transition-colors',
                    category.active ? 'text-white' : 'text-black group-hover:text-white',
                  )}
                >
                  {category.name}
                </h3>
                <p
                  className={cn(
                    'mt-1 text-sm transition-colors',
                    category.active ? 'text-white' : 'text-black/40 group-hover:text-white/80',
                  )}
                >
                  <span className="font-semibold">{category.openPositions}</span> Open position
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

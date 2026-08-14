import { ClipboardCheck, Dumbbell, Footprints, type LucideIcon } from 'lucide-react'
import { BAND_ITEMS } from '../data'

const BAND_ICONS: LucideIcon[] = [Dumbbell, ClipboardCheck, Footprints]

/* Salmon services band — solid #fe9191 strip with three icon columns
   (Free Lesson / 35% Discount / Free Testing). */
export function ServicesBand() {
  return (
    <section aria-label="Why choose us" className="bg-brand">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3">
        {BAND_ITEMS.map((item, i) => {
          const Icon = BAND_ICONS[i]!
          return (
            <div key={item.title} className="flex flex-col items-center text-center text-white">
              <Icon className="h-10 w-10" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-white/85">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

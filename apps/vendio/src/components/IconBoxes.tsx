import { Headphones, RotateCcw, Truck } from 'lucide-react'
import { iconBoxes, iconBoxesLabel } from '../data'

const icons = {
  truck: Truck,
  rotate: RotateCcw,
  headphones: Headphones,
} as const

export function IconBoxes() {
  return (
    <section aria-label={iconBoxesLabel} className="bg-white py-[99px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {iconBoxes.map((box) => {
          const Icon = icons[box.icon]
          return (
            <div key={box.title} className="text-center">
              <div className="mx-auto flex h-[75px] w-[75px] items-center justify-center">
                <Icon aria-hidden="true" className="h-[75px] w-[75px] text-ink" strokeWidth={1} />
              </div>
              <h3 className="mt-[33px] text-lg font-medium text-ink">{box.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted">{box.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

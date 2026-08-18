import { Briefcase, Building2, Gavel, Landmark, Scale, ScrollText } from 'lucide-react'
import { BRANDS } from '../data'

const ICONS = {
  scale: Scale,
  building: Building2,
  landmark: Landmark,
  briefcase: Briefcase,
  scroll: ScrollText,
  gavel: Gavel,
} as const

export function BrandStrip() {
  return (
    <div className="border-t border-line/60 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 py-12">
        {BRANDS.map((brand) => {
          const Icon = ICONS[brand.icon]
          return (
            <span
              key={brand.name}
              className="flex items-center gap-2 text-lg font-medium tracking-wide text-[#999]"
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
              {brand.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

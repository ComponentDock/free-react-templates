import { Globe, Rocket, Smile, Tag } from 'lucide-react'
import { financeItems, financeLabel, type FinanceItem } from '../data'

const iconMap = {
  rocket: Rocket,
  globe: Globe,
  smile: Smile,
  tag: Tag,
} as const

export function FeatureStrip() {
  return (
    <section aria-label={financeLabel} className="bg-light py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {financeItems.map((item: FinanceItem) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.title} className="flex items-center">
              <Icon aria-hidden="true" className="mr-[25px] h-9 w-9 shrink-0 text-brand" />
              <h2 className="text-lg font-medium leading-[27px] text-ink">{item.title}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

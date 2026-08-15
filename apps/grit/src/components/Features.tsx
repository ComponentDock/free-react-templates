import { Activity, Bike, Citrus, Dumbbell, Salad, Users, type LucideIcon } from 'lucide-react'
import { featureItems, featuresEyebrow, featuresLead, featuresTitle, type Feature } from '../data'
import { cn } from '@free-react-templates/ui'

const iconMap: Record<Feature['icon'], LucideIcon> = {
  dumbbell: Dumbbell,
  users: Users,
  activity: Activity,
  salad: Salad,
  citrus: Citrus,
  bike: Bike,
}

export function Features() {
  return (
    <section aria-label={featuresTitle} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {featuresEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-[2.5rem]">{featuresTitle}</h2>
          <p className="mt-4 text-muted">{featuresLead}</p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li
                key={item.title}
                className="group flex flex-col items-center rounded-none bg-white p-8 text-center transition-colors duration-300 hover:bg-brand"
              >
                <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-brand text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand">
                  <Icon aria-hidden="true" className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-black transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed text-[#989898] transition-colors duration-300 group-hover:text-white',
                  )}
                >
                  {item.text}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

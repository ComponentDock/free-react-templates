import type { ComponentType } from 'react'
import { Monitor, PenTool, Printer, Smartphone, Tablet } from 'lucide-react'
import { FEATURES, type FeatureIcon } from '../data'

/* Feature row — white section with five bordered icon cards describing
   what the software can do. */

const iconMap: Record<
  FeatureIcon,
  ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
> = {
  monitor: Monitor,
  smartphone: Smartphone,
  tablet: Tablet,
  pen: PenTool,
  printer: Printer,
}

export function Features() {
  return (
    <section id="features-section" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {FEATURES.heading}
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.items.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-200 p-6 text-center transition-colors hover:border-brand dark:border-gray-700 dark:bg-gray-800"
              >
                <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden={true} />
                <h3 className="mt-4 text-[16px] font-semibold text-navy dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-500">{feature.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

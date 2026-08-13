import { useState } from 'react'
import { Cloud, Shield, Sparkles, Zap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { featureTabs, type Feature } from '../data'

type FeatureTab = (typeof featureTabs)[number]

const iconMap = {
  default: Shield,
  blue: Cloud,
  pink: Sparkles,
  yellow: Zap,
} as const

const colorMap: Record<Feature['color'], string> = {
  default: 'bg-ico-blue/10 text-ico-blue',
  blue: 'bg-ico-purple/10 text-ico-purple',
  pink: 'bg-ico-pink/10 text-ico-pink',
  yellow: 'bg-ico-yellow/10 text-ico-yellow',
}

/** Tabbed "Core Features" section — Features / Advanced Features panes. */
export function CoreFeatures() {
  const [activeTab, setActiveTab] = useState<FeatureTab>(featureTabs[0]!)

  return (
    <section id="features" className="border-t border-line bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[320px_1fr] lg:px-8">
        <div>
          <h2 className="text-4xl font-normal text-primary-950">Core Features</h2>
          <div className="mt-8 flex gap-3 lg:flex-col">
            {featureTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={cn(
                  'rounded-md px-6 py-2.5 text-sm font-medium transition-colors',
                  activeTab === tab
                    ? 'bg-primary-950 text-white'
                    : 'bg-ice-100 text-primary-950 hover:bg-ice-50',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {activeTab.features.map((feature) => {
            const Icon = iconMap[feature.color]
            return (
              <div key={feature.title} className="flex items-start gap-5">
                <span
                  className={cn(
                    'flex h-14 w-14 shrink-0 items-center justify-center rounded-full',
                    colorMap[feature.color],
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-primary-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mute-500">{feature.blurb}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

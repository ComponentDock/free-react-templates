import { useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'

const tabData = [
  {
    id: 'vps',
    label: 'Next gen VPS',
    title: 'Next Generation VPS Hosting',
    desc: 'Experience blazing-fast performance with our next-generation VPS servers. Built on cutting-edge hardware with NVMe SSD storage and enterprise-grade networking.',
    img: 'https://picsum.photos/seed/hostcraft-vps/500/350',
  },
  {
    id: 'perf',
    label: 'Performance',
    title: 'Unmatched Performance',
    desc: 'Our servers are optimized for maximum performance with advanced caching, CDN integration, and resource isolation to ensure your sites load instantly.',
    img: 'https://picsum.photos/seed/hostcraft-perf/500/350',
  },
  {
    id: 'eff',
    label: 'Effectiveness',
    title: 'Cost-Effective Solutions',
    desc: 'Get the most value for your money with our competitively priced hosting plans. No hidden fees, no surprises — just reliable hosting that works.',
    img: 'https://picsum.photos/seed/hostcraft-eff/500/350',
  },
] as const

type TabId = (typeof tabData)[number]['id']

const tabMap: Record<TabId, (typeof tabData)[number]> = Object.fromEntries(
  tabData.map((t) => [t.id, t]),
) as Record<TabId, (typeof tabData)[number]>

export function TabbedServices() {
  const [active, setActive] = useState<TabId>(tabData[0]!.id)
  const current = tabMap[active]

  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Tab buttons */}
        <div className="mb-12 flex justify-center gap-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                'rounded px-6 py-3 text-sm font-medium transition-colors',
                active === tab.id
                  ? 'bg-brand text-white'
                  : 'bg-white text-text-muted hover:bg-gray-100',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={current.img} alt={current.title} className="w-full rounded object-cover" />
          <div>
            <h3 className="mb-4 text-2xl font-bold text-text-primary">{current.title}</h3>
            <p className="mb-6 text-text-muted">{current.desc}</p>
            <Button className="rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

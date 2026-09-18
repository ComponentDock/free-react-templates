import { Code, Globe, Layout, Diamond } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Software',
    desc: 'Few would argue that, despite the advancements of feminism over the past three decades.',
  },
  {
    icon: Globe,
    title: 'WordPress',
    desc: 'Few would argue that, despite the advancements of feminism over the past three decades.',
  },
  {
    icon: Layout,
    title: 'Front End',
    desc: 'Few would argue that, despite the advancements of feminism over the past three decades.',
  },
  {
    icon: Diamond,
    title: 'UX Design',
    desc: 'Few would argue that, despite the advancements of feminism over the past three decades.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => {
            const Icon = svc.icon
            // Alternate layout: odd items have description on top, icon on bottom
            const reversed = i % 2 === 1
            return (
              <div
                key={svc.title}
                className={`flex flex-col ${reversed ? 'order-first sm:order-none' : ''}`}
              >
                <div className="flex h-64 flex-col items-center justify-center bg-white transition hover:bg-brand/5">
                  <Icon className="mb-4 h-9 w-9 text-pink" />
                  <h3 className="text-lg font-medium text-ink">{svc.title}</h3>
                </div>
                <div className="flex h-64 items-center justify-center bg-service-gray p-8">
                  <p className="text-center text-sm leading-relaxed text-white/90">{svc.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

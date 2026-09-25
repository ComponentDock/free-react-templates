import { Smartphone, TrendingUp, Lightbulb, Globe, BarChart3, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SERVICES: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Smartphone,
    title: 'Mobile Optimize',
    description:
      'Every design is crafted to look and perform beautifully on mobile devices, tablets, and desktops alike.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description:
      'Strategic design decisions that drive user engagement and boost your bottom line with data-driven insights.',
  },
  {
    icon: Lightbulb,
    title: 'Intuitive Idea',
    description:
      'Creative solutions that feel natural and effortless, turning complex problems into simple, elegant experiences.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Designs that resonate across cultures and markets, helping your product connect with users worldwide.',
  },
  {
    icon: BarChart3,
    title: 'Data Driven',
    description:
      'Decisions backed by analytics and user research, ensuring every pixel serves a purpose.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description:
      'Optimized for speed and efficiency, delivering lightning-fast load times and smooth interactions.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">My Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-leaf-50 text-leaf-400">
                <s.icon size={28} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-600">{s.description}</p>
              <a
                href="#"
                className="text-sm font-semibold uppercase tracking-wider text-leaf-400 transition-colors hover:text-leaf-600"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

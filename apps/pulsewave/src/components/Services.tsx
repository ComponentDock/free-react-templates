import { BarChart3, Search, Palette, Lightbulb, Settings, Briefcase } from 'lucide-react'

const SERVICES = [
  {
    icon: BarChart3,
    title: 'Marketing',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Lightbulb,
    title: 'Creative',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Settings,
    title: 'Optimization',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Briefcase,
    title: 'Business Strategy',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-dark">
            We Provide A Lot of Cool Services
          </h2>
          <a href="#" className="text-sm font-medium text-accent-blue hover:underline">
            Our Services
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group cursor-pointer rounded-xl bg-white p-8 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-accent-blue hover:text-white"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-icon-bg transition-colors group-hover:bg-white">
                <Icon size={40} className="text-accent-blue" />
              </div>
              <h3 className="mb-2 text-lg font-medium">{title}</h3>
              <p className="text-sm text-text-muted transition-colors group-hover:text-white/90">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

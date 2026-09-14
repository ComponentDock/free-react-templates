import { Zap, BarChart3, Shield, Target, Users, Lightbulb, Settings } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Amazing service',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
  },
  {
    icon: BarChart3,
    title: 'Management',
    text: 'Odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    icon: Shield,
    title: 'Risk Evaluation',
    text: 'Odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    icon: Target,
    title: 'Assessment',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    icon: Users,
    title: 'Great team',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    icon: Lightbulb,
    title: 'Amazing service',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
  },
  {
    icon: Settings,
    title: 'Amazing service',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
  },
] as const

function ServiceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  text: string
}) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        {<Icon size={24} className="text-accent" />}
      </div>
      <h3 className="mb-3 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-mist">{text}</p>
      <a
        href="#"
        className="inline-block text-sm font-semibold uppercase text-accent transition-colors hover:text-brand"
      >
        Discover More
      </a>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-display text-3xl font-bold text-brand">
            We take care of your business
          </h2>
          <p className="text-sm text-mist">Explore our services</p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={`service-${i}`} icon={s.icon} title={s.title} text={s.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

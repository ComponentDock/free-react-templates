import { Palette, Layout, Smartphone, Code, BookOpen, Zap } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Unique Design',
    desc: 'Crafting one-of-a-kind designs that make your brand stand out from the competition.',
  },
  {
    icon: Layout,
    title: 'Clean Layout',
    desc: 'Structured and organized layouts that guide users naturally through your content.',
  },
  {
    icon: Smartphone,
    title: 'Well Responsive',
    desc: 'Fully responsive designs that look stunning on every device and screen size.',
  },
  {
    icon: Code,
    title: 'Pro Developing',
    desc: 'Professional development with clean, maintainable code built for performance.',
  },
  {
    icon: BookOpen,
    title: 'Well Documented',
    desc: 'Comprehensive documentation ensuring easy handoff and future maintenance.',
  },
  {
    icon: Zap,
    title: 'Quick Marketing',
    desc: 'Fast-track marketing strategies that get your business noticed immediately.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Our Services</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-light">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{desc}</p>
              <a
                href="#services"
                className="mt-4 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

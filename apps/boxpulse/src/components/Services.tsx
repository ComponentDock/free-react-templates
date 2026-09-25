import { Palette, Smartphone, Globe, PenTool, Settings, FileCode, Code, Server } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Crafting unique brand identities that resonate with your audience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications with stunning UIs.',
  },
  {
    icon: Globe,
    title: 'Web',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
  },
  {
    icon: PenTool,
    title: 'Graphic',
    description: 'Eye-catching graphics and visual content that communicate your message.',
  },
  {
    icon: Settings,
    title: 'Consulting',
    description: 'End-to-end digital solutions tailored to your business needs.',
  },
  {
    icon: FileCode,
    title: 'PSD',
    description: 'Pixel-perfect PSD to HTML conversions with clean markup.',
  },
  { icon: Code, title: 'HTML', description: 'Semantic, accessible HTML5 with modern standards.' },
  {
    icon: Server,
    title: 'PHP',
    description: 'Robust backend development for scalable web applications.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-brand-dark/10 md:text-[120px]">
              01
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-text-primary">
              Services
            </h2>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink/10">
                      <Icon className="h-8 w-8 text-brand-pink" />
                    </div>
                    <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-text-primary">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-text-muted">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

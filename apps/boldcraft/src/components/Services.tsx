import { ArrowRight, Palette, Search, Target, Code } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UI Design',
    desc: 'Crafting beautiful, intuitive interfaces that delight users and drive engagement across all platforms.',
  },
  {
    icon: Search,
    title: 'UX Research',
    desc: 'Deep user research and testing to validate design decisions and create experiences that truly work.',
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    desc: 'Building cohesive brand identities that resonate with your audience and stand out in the market.',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Turning designs into fast, accessible, and responsive websites using modern technologies.',
  },
]

export function Services() {
  return (
    <section id="service" className="bg-bg-light py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-text-primary">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border-l-4 border-b-4 border-[#EFEFEF] bg-white p-8 transition-shadow hover:shadow-[0_0_20px_rgba(255,133,83,0.15)]"
            >
              <s.icon className="mb-4 h-10 w-10 text-brand" />
              <h3 className="mb-3 font-heading text-xl font-bold text-text-primary">{s.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">{s.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
              >
                Browse <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

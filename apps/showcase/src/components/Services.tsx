import { Camera, Code2, PenTool, Smartphone, Sparkles, Target } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const services = [
  {
    title: 'Web Design',
    icon: PenTool,
    blurb: 'Clean, conversion-focused interfaces crafted around your brand.',
  },
  {
    title: 'Photography',
    icon: Camera,
    blurb: 'Visual storytelling that gives products and people a voice.',
  },
  {
    title: 'Web Development',
    icon: Code2,
    blurb: 'Fast, accessible, standards-based builds that scale with you.',
  },
  {
    title: 'App Development',
    icon: Smartphone,
    blurb: 'Mobile-first experiences from prototype to app store.',
  },
  {
    title: 'Branding',
    icon: Sparkles,
    blurb: 'Identities, guidelines, and assets that make you memorable.',
  },
  {
    title: 'Product Strategy',
    icon: Target,
    blurb: 'Research-driven roadmaps that turn ideas into outcomes.',
  },
] as const

export function Services() {
  return (
    <section id="services-section" aria-label="Services" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Services" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-xl bg-brand/10">
                <service.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold uppercase tracking-wide text-heading">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

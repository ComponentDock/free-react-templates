import { Film, PenTool, Share2, Server } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Film,
    title: 'Motion graphics',
    description:
      'Bring your ideas to life with stunning motion graphics that captivate audiences and elevate your brand.',
  },
  {
    icon: PenTool,
    title: 'Scriptwriting and editing',
    description:
      'Professional scriptwriting and meticulous editing to ensure your story is told with clarity and impact.',
  },
  {
    icon: Share2,
    title: 'Video distribution',
    description:
      'Strategic distribution across all major platforms to maximize your reach and engagement.',
  },
  {
    icon: Server,
    title: 'Video hosting',
    description:
      'Reliable, fast, and secure video hosting solutions tailored for professional content creators.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left column — title + description */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide">What We do?</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              We are a passionate team of video professionals dedicated to crafting compelling
              visual stories. From concept to final delivery, we handle every aspect of video
              production.
            </p>
            <ButtonLink
              href="#portfolio"
              className="mt-6 inline-flex border border-gray-900 bg-transparent px-6 py-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-brand hover:text-white hover:border-brand"
            >
              View all services
            </ButtonLink>
          </div>

          {/* Right column — 2x2 service grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {services.map((service) => (
              <div key={service.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

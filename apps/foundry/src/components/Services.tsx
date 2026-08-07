import {
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  PencilRuler,
  Ruler,
} from 'lucide-react'

const services = [
  {
    title: 'General Constructing',
    blurb: 'Full-scope construction of residential, commercial, and industrial buildings.',
    icon: Hammer,
  },
  {
    title: 'Building Modeling',
    blurb: 'Precise 3D models and blueprints that guide every phase of the build.',
    icon: DraftingCompass,
  },
  {
    title: 'Design Build',
    blurb: 'Architecture and construction under one roof for faster, leaner delivery.',
    icon: Ruler,
  },
  {
    title: 'Construction Services',
    blurb: 'Site preparation, structural works, and finishing handled by our crews.',
    icon: Building2,
  },
  {
    title: 'Pre-Construction Design',
    blurb: 'Feasibility studies, budgeting, and planning before the ground is broken.',
    icon: PencilRuler,
  },
  {
    title: 'Construction Management',
    blurb: 'Scheduling, procurement, and quality control from start to handover.',
    icon: ClipboardCheck,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">What We Do</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          We Offer Services
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-line p-8 transition-colors hover:border-brand dark:border-gray-800"
            >
              <service.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

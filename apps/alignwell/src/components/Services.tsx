import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: '🦴',
    title: 'Spinal Manipulation',
    description: 'Professional spinal adjustment techniques to restore mobility and relieve pain.',
  },
  {
    icon: '⚡',
    title: 'Electrotherapy',
    description: 'Advanced electrical stimulation therapy for muscle recovery and pain management.',
  },
  {
    icon: '🩺',
    title: 'Medical Acupuncture',
    description: 'Traditional acupuncture combined with modern medical knowledge for healing.',
  },
  {
    icon: '🏋️',
    title: 'Therapeutic Exercise',
    description: 'Customized exercise programs to strengthen muscles and improve flexibility.',
  },
  {
    icon: '💧',
    title: 'Manual Lymphatic',
    description: 'Gentle massage techniques to support lymphatic drainage and reduce swelling.',
  },
  {
    icon: '🤲',
    title: 'Joint Mobilization',
    description: 'Hands-on techniques to improve joint movement and reduce stiffness.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            We Offer Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">Our Benefits</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-2xl">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Heart, Stethoscope, FlaskConical, Smile, Scissors, Brain } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    desc: 'Comprehensive heart care with advanced diagnostics, interventional procedures, and preventive cardiology programs.',
  },
  {
    icon: Stethoscope,
    title: 'Gastroenterology',
    desc: 'Expert digestive health services including endoscopy, colonoscopy, and treatment for GI disorders.',
  },
  {
    icon: FlaskConical,
    title: 'Medical Lab',
    desc: 'Full-service diagnostic laboratory with rapid turnaround on blood work, imaging, and specialized testing.',
  },
  {
    icon: Smile,
    title: 'Dental Care',
    desc: 'Complete dental services from routine cleanings and fillings to cosmetic and restorative procedures.',
  },
  {
    icon: Scissors,
    title: 'Surgery',
    desc: 'State-of-the-art surgical facilities with minimally invasive techniques and experienced surgical teams.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    desc: 'Specialized neurological care for brain, spine, and nervous system conditions with advanced imaging.',
  },
] as const

/** Six service icon boxes in a 3-column grid. */
export function Services() {
  return (
    <section id="services" className="bg-band-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink-900">Our Services</h2>
          <p className="mt-2 text-sm text-mute-600">to choose from</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/10">
                <Icon className="h-6 w-6 text-teal-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold text-ink-900">{title}</h3>
                <p className="text-sm leading-6 text-mute-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#info"
            className="inline-flex h-12 items-center rounded-sm bg-teal-400 px-8 font-semibold text-white uppercase transition-colors hover:bg-teal-500"
          >
            Read More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

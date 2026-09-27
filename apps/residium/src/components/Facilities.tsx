import { ClipboardList, Building, Headphones } from 'lucide-react'

const FACILITIES = [
  {
    icon: ClipboardList,
    title: 'Planning Stage',
    description:
      'Comprehensive planning services to bring your vision to life with meticulous attention to detail.',
  },
  {
    icon: Building,
    title: 'Property Development',
    description:
      'End-to-end property development from concept to completion, ensuring quality at every step.',
  },
  {
    icon: Headphones,
    title: 'Support Center',
    description:
      'Dedicated support team available to assist you throughout your real estate journey.',
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="bg-navy-800 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">Our Facilities</h2>
          <div className="mx-auto mt-4 flex justify-center gap-1">
            <span className="h-1 w-12 bg-red-500" />
            <span className="h-1 w-4 bg-red-500" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FACILITIES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium text-red-400 transition hover:text-red-300"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

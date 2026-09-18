import { HardHat, Ruler, PenTool, Construction, Compass, Settings } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'General Constructing',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
  {
    icon: Ruler,
    title: 'Building Modeling',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
  {
    icon: PenTool,
    title: 'Design Build',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
  {
    icon: Construction,
    title: 'Construction Services',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
  {
    icon: Compass,
    title: 'Pre-Construction Design',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
  {
    icon: Settings,
    title: 'Construction Management',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics',
  },
] as const

export function ServicesGrid() {
  return (
    <section aria-label="Services" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="text-center">
              <svc.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{svc.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

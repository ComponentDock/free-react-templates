import { PenTool, Briefcase, Compass } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Vector Artworks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Identity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
  },
  {
    icon: Compass,
    title: 'Art Direction Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
  },
]

export function ServicesCards() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="text-center">
              <svc.icon className="mx-auto mb-4 text-brand" size={48} strokeWidth={1.5} />
              <h3 className="mb-3 text-lg font-semibold text-ink">{svc.title}</h3>
              <p className="leading-relaxed text-mist">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

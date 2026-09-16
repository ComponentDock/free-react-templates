import { Building2, HardHat, Home, MapPin, Landmark, Wrench } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Pre-Construction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.',
  },
  {
    icon: HardHat,
    title: 'New Construction',
    description:
      'Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam.',
  },
  {
    icon: Home,
    title: 'Remodel',
    description: 'Rem possimus distinctio ex obcaecati mollitia quibusdam temporibus culpa dolore.',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Aperiam neque id illum laudantium consequuntur sunt nisi aperiam neque.',
  },
  {
    icon: Landmark,
    title: 'Civil & Architecture',
    description: 'Dolores molestias blanditiis sequi ratione voluptatum nostrum provident.',
  },
  {
    icon: Wrench,
    title: 'Engineering',
    description: 'Illum laudantium consequuntur sunt nisi aperiam neque id illum.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 border-l-4 border-brand pl-4">
          <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Service cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-brand">
                  <s.icon size={24} className="text-ink" />
                </div>
                <h3 className="mb-2 font-heading text-base font-bold uppercase">{s.title}</h3>
                <p className="text-sm text-body">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Right text panel */}
          <div className="flex flex-col justify-center">
            <div className="border-l-4 border-brand pl-4">
              <h3 className="mb-4 font-section text-2xl font-bold uppercase">
                Why Choose Our Services
              </h3>
            </div>
            <p className="mb-4 text-body leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugiat nostrum
              provident officiis dolorum consequuntur facere ipsa, aperiam quia eos rerum magnam
              veritatis voluptatem, sequi quibusdam unde accusantium.
            </p>
            <p className="text-body leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolorum nemo
              officiis provident earum atque voluptatem error distinctio alias nulla voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

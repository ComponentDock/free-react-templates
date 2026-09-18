import { Map, Building2, Truck } from 'lucide-react'

const additionalServices = [
  { icon: Map, title: 'Drone Mapping' },
  { icon: Building2, title: 'Real Estate' },
  { icon: Truck, title: 'Commercial' },
]

export function SecondServices() {
  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center rounded bg-white p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-heading">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

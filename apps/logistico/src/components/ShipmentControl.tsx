import { Search, MapPin, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find Your Route',
    description:
      'Search and compare available routes for your cargo with our comprehensive logistics network.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Track & Manage',
    description:
      'Real-time GPS tracking and shipment management through our centralized dashboard.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Deliver Safely',
    description:
      'Guaranteed safe and timely delivery with insurance coverage and proof of delivery.',
  },
] as const

export function ShipmentControl() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-white">
            We Give You Complete Control
            <br />
            of Your Shipments
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            From pickup to delivery, manage every step of your logistics with our streamlined
            platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute left-2/3 top-12 hidden h-px w-1/3 bg-white/20 md:block" />
              )}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand text-brand">
                <step.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="mb-2 text-4xl font-black text-brand">{step.number}.</div>
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

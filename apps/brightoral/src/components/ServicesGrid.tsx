import { Sparkles, Stethoscope, Armchair, Wrench, Pill, Scissors } from 'lucide-react'

const SERVICES = [
  { icon: Sparkles, title: 'Tooth Whitening' },
  { icon: Stethoscope, title: 'Dental Checkup' },
  { icon: Armchair, title: 'Dentist Chair' },
  { icon: Wrench, title: 'Dental Tools' },
  { icon: Pill, title: 'First Aid Kit' },
  { icon: Scissors, title: 'Oral Surgery' },
]

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-light uppercase tracking-wider text-ink">
          Our <span className="font-bold">Services</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex items-center gap-4 rounded-lg border border-gray-100 p-6 transition-colors hover:bg-paper"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50">
                <service.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

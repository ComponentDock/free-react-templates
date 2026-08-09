import { Battery, Car, Cpu, Droplet, Gauge, Thermometer, Wrench } from 'lucide-react'

const services = [
  { title: 'General Auto Repair & Maintenance', icon: Wrench },
  { title: 'Brake Repair and Replacement', icon: Car },
  { title: 'Air Conditioning A/C Repair', icon: Thermometer },
  { title: 'Tire Repair and Replacement', icon: Gauge },
  { title: 'Fuel System Repair', icon: Droplet },
  { title: 'Exhaust System Repair', icon: Car },
  { title: 'Engine Cooling System Maintenance', icon: Thermometer },
  { title: 'Electrical Diagnostics', icon: Cpu },
  { title: 'Oil Change', icon: Droplet },
  { title: 'Tune Up', icon: Gauge },
  { title: 'Wheel Alignment', icon: Wrench },
  { title: 'Computer Diagnostic Testing', icon: Battery },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            What we offer
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
            This is our some of the many auto repair services we offer
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-paper p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-bold leading-snug text-ink">
                {service.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

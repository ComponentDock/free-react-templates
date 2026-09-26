import { Layers, Settings, Code } from 'lucide-react'

const services = [
  {
    icon: Layers,
    items: ['UI/UX Design', 'Mobile App Design', 'Responsive Design'],
  },
  {
    icon: Settings,
    items: ['Product Strategy', 'Design Sprints', 'UX Strategy'],
  },
  {
    icon: Code,
    items: ['HTML/CSS', 'Prototyping', 'User Testing'],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-mist">
            What I do
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">My services</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-brand" />
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-mist">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

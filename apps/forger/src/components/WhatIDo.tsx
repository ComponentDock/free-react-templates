import { Compass, FlaskConical, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Explore',
    items: ['Design Sprints', 'Product Strategy', 'UX Strategy'],
  },
  {
    icon: FlaskConical,
    title: 'Create',
    items: ['Information', 'UX/UI Design', 'Branding'],
  },
  {
    icon: Lightbulb,
    title: 'Learn',
    items: ['Prototyping', 'User Testing', 'UI Testing'],
  },
] as const

export function WhatIDo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
            What I Do
          </span>
          <h2 className="mt-4 text-3xl font-bold">Strategy, design and a bit of magic</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
              <ul className="space-y-2 text-gray-500">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Pencil, Users, Wrench } from 'lucide-react'

const features = [
  {
    icon: Pencil,
    title: 'Creative Plan & Design',
    description:
      'There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
  },
  {
    icon: Users,
    title: 'Talented Peoples',
    description:
      'There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
  },
  {
    icon: Wrench,
    title: 'Modern Tools',
    description:
      'There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <f.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-heading">{f.title}</h3>
              <p className="text-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

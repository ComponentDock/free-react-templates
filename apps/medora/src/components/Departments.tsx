import { HeartPulse, Baby, Bone, Brain, Smile, Ambulance } from 'lucide-react'

const departments = [
  {
    title: 'Cardiology',
    description: 'Heart health, diagnostics, and preventive cardiac care.',
    icon: HeartPulse,
  },
  {
    title: 'Pediatrics',
    description: 'Gentle, family-centered care for children of every age.',
    icon: Baby,
  },
  {
    title: 'Orthopedics',
    description: 'Bone, joint, and spine treatment backed by modern surgery.',
    icon: Bone,
  },
  {
    title: 'Neurology',
    description: 'Comprehensive care for brain and nervous system conditions.',
    icon: Brain,
  },
  {
    title: 'Dental Care',
    description: 'Preventive and restorative dentistry for the whole family.',
    icon: Smile,
  },
  {
    title: 'Emergency',
    description: '24/7 urgent care with rapid response and on-site labs.',
    icon: Ambulance,
  },
] as const

export function Departments() {
  return (
    <section id="departments" aria-label="Departments" className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">Our Departments</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-mist">
          Six specialized departments working together for complete, coordinated care.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article
              key={department.title}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex rounded-full bg-brand-50 p-3 text-brand">
                <department.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{department.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{department.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BookOpen, Database, Users } from 'lucide-react'

const activities = [
  { icon: Database, stat: '$2.5 M', label: 'Total Donation' },
  { icon: BookOpen, stat: '1465', label: 'Total Project' },
  { icon: Users, stat: '3965', label: 'Total Volunteers' },
  { icon: Users, stat: '3965', label: 'Total Volunteers' },
] as const

/** About band with four white stat cards on the light #f9f9ff surface. */
export function AboutMyself() {
  return (
    <section id="about" className="bg-band-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink-900">About Myself</h2>
          <p className="mt-4 text-sm leading-6 text-mute-500">
            Sana was founded on a simple promise: every patient deserves attentive, honest, and
            modern healthcare — from routine checkups to critical care.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ icon: Icon, stat, label }) => (
            <div
              key={`${stat}-${label}`}
              className="rounded-md border border-line-300 bg-white p-6 transition-shadow hover:shadow-[0_8px_21px_#dddddd]"
            >
              <Icon className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold text-ink-900">{stat}</h3>
              <p className="mt-1 text-sm text-mute-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

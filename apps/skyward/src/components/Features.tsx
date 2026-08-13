import { Database, Server, Wrench } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Super Fast Server',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Database,
    title: 'Daily Backups',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Wrench,
    title: 'Technical Services',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
]

/** Light section with a heading and three feature columns (icon + title + blurb). */
export function Features() {
  return (
    <section id="about" className="bg-mist-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-gray-900">Why You Should Choose Us</h2>
          <p className="mt-4 text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

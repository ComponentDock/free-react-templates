import { Cloud, HardDrive, Server, Share2 } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud VPS',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Share2,
    title: 'Share',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Server,
    title: 'VPS',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: HardDrive,
    title: 'Dedicated',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
]

/** White section with a heading and four service columns (icon + title + blurb). */
export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-gray-900">Our Main Services</h2>
          <p className="mt-4 text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="rounded-lg border border-gray-100 p-8 text-center">
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

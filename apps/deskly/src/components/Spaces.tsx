import { ArrowRight, Armchair, Building2, DoorOpen, Users } from 'lucide-react'

interface Space {
  name: string
  description: string
  icon: typeof Armchair
  image: string
}

const spaces: Space[] = [
  {
    name: 'Hot Desk',
    description:
      'A flexible seat in our open lounge. First come, first served — perfect for drop-ins.',
    icon: Armchair,
    image: 'https://picsum.photos/seed/deskly-hotdesk/600/400',
  },
  {
    name: 'Dedicated Desk',
    description: 'Your own desk, chair, and storage in a shared floor — ready whenever you are.',
    icon: Users,
    image: 'https://picsum.photos/seed/deskly-dedicated/600/400',
  },
  {
    name: 'Private Office',
    description: 'Lockable offices for teams of 2–12 with door access and room to grow.',
    icon: Building2,
    image: 'https://picsum.photos/seed/deskly-office/600/400',
  },
  {
    name: 'Meeting Rooms',
    description: 'Bookable conference rooms with video conferencing for 4–20 people.',
    icon: DoorOpen,
    image: 'https://picsum.photos/seed/deskly-meeting/600/400',
  },
]

export function Spaces() {
  return (
    <section id="spaces" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Spaces
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Find Your Perfect Workspace
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From a quick hot desk to a dedicated office — pick the setup that fits how you work.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <article
              key={space.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={space.image}
                alt={`${space.name} at Deskly`}
                width={600}
                height={400}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400">
                  <space.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                  {space.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {space.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
                >
                  Reserve
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

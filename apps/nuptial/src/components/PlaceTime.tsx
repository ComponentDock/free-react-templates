import { Bell, Cake, Heart, type LucideIcon } from 'lucide-react'

interface EventCard {
  title: string
  icon: LucideIcon
  seed: string
  time: string
  address: string
  phone: string
}

const events: EventCard[] = [
  {
    title: 'The Reception',
    icon: Bell,
    seed: 'nuptial-20',
    time: 'Saturday, 28, 2019 · 02:00 pm-10:00 pm',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+0 (123) 456 78 910',
  },
  {
    title: 'The Ceremony',
    icon: Heart,
    seed: 'nuptial-21',
    time: 'Saturday, 28, 2019 · 02:00 pm-10:00 pm',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+0 (123) 456 78 910',
  },
  {
    title: 'The Party',
    icon: Cake,
    seed: 'nuptial-22',
    time: 'Saturday, 28, 2019 · 02:00 pm-10:00 pm',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+0 (123) 456 78 910',
  },
]

export function PlaceTime() {
  return (
    <section
      id="when-where"
      className="bg-mist-50 py-16 transition-colors dark:bg-gray-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">
          Place &amp; Time
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={`https://picsum.photos/seed/${event.seed}/700/900`}
                  alt=""
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-script text-3xl">{event.title}</h3>
                  <p className="mt-3 text-xs font-medium tracking-wide text-white/85">
                    {event.time}
                  </p>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/70">
                    {event.address}
                  </p>
                  <p className="mt-2 text-xs text-white/70">{event.phone}</p>
                  <a
                    href="#"
                    className="mt-5 border border-pink-300/70 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-pink-500 hover:border-pink-500"
                  >
                    See Map
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

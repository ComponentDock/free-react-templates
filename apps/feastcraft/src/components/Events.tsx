import { Check } from 'lucide-react'

interface Event {
  title: string
  price: string
  description: string
  imageSeed: string
  items: string[]
}

const EVENTS: Event[] = [
  {
    title: 'Farm-to-Table Dinner',
    price: '$89',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imageSeed: 'fc-event1',
    items: ['Seasonal ingredients', '4-course meal', 'Wine pairing', 'Live music'],
  },
  {
    title: 'Weekend Brunch Special',
    price: '$45',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    imageSeed: 'fc-event2',
    items: ['Unlimited mimosas', 'Chef specials', 'Fresh pastries', 'Outdoor seating'],
  },
  {
    title: "Chef's Table Experience",
    price: '$120',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    imageSeed: 'fc-event3',
    items: ['Private dining', '7-course tasting', 'Kitchen tour', 'Meet the chef'],
  },
]

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-orange">Events</p>
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Enjoy Our Events
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.title} className="overflow-hidden rounded-lg bg-peach/30">
              <img
                src={`https://picsum.photos/seed/${event.imageSeed}/600/400`}
                alt={event.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-orange px-4 py-1 text-sm font-bold text-white">
                  {event.price}
                </span>
                <h3
                  className="mb-2 text-xl font-bold text-heading"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-charcoal">{event.description}</p>
                <ul className="flex flex-col gap-2">
                  {event.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                      <Check size={16} className="text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

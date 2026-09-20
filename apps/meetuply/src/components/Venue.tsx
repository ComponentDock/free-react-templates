import { MapPin, Car, Bed, UtensilsCrossed } from 'lucide-react'

const VENUES = [
  {
    icon: MapPin,
    title: 'Venue',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Car,
    title: 'Transport',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Bed,
    title: 'Hotel',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export function Venue() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-sm font-light uppercase tracking-widest text-gray-400">
          Explore
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-charcoal">Venue</h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VENUES.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={28} />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-charcoal">{item.title}</h4>
                <p className="text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@free-react-templates/ui'

const cards = [
  { title: 'Weddings', image: 'seaview-disc-1', alt: 'Wedding venue at Seaview' },
  { title: 'Parties', image: 'seaview-disc-2', alt: 'Event party at Seaview' },
  { title: 'Relax', image: 'seaview-disc-3', alt: 'Relaxation at Seaview' },
]

export function Discover() {
  return (
    <section id="news" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">Hotel</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
            Discover Seaview Hotel
          </h2>
        </div>

        {/* Two-column text */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-white">
              From the moment you arrive, you'll be captivated by the breathtaking coastal scenery
              and warm, attentive service that define the Seaview experience.
            </p>
            <a
              href="#about"
              className={cn(
                'mt-8 inline-block rounded bg-primary-400 px-8 py-3',
                'text-sm font-semibold uppercase tracking-wider text-white',
                'transition-colors hover:bg-primary-400/90',
              )}
            >
              Discover
            </a>
          </div>
          <p className="leading-relaxed text-white/80">
            Whether you're planning an intimate escape or a grand celebration, Seaview Hotel
            provides the perfect backdrop. Our dedicated events team will ensure every detail is
            handled with care, while you enjoy world-class dining, a luxurious spa, and direct
            access to pristine beaches. Discover a place where luxury meets the sea.
          </p>
        </div>

        {/* Card grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="group relative cursor-pointer overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${card.image}/400/300`}
                alt={card.alt}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/40 transition-colors duration-300 group-hover:bg-navy/60">
                <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

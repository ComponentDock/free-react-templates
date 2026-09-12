const CLIENTS = ['TripAdvisor', 'Yelp', 'OpenTable', 'Zomato', 'Booking.com'] as const

export function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-2xl md:text-3xl font-bold text-text-secondary/30 hover:text-text-secondary/60 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

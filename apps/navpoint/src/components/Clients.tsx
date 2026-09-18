const CLIENTS = ['TripAdvisor', 'Yelp', 'OpenTable', 'Zomato', 'Booking.com'] as const

export function Clients() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="text-gray-300 font-bold text-xl tracking-wide hover:text-gray-500 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

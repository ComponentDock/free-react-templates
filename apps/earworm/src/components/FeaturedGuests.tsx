const guests = [
  { name: 'Alfred Day', role: 'Producer', seed: 'guest-alfred' },
  { name: 'Jayden White', role: 'Drummer', seed: 'guest-jayden' },
  { name: 'Vincent Reid', role: 'Entrepreneur', seed: 'guest-vincent' },
] as const

export function FeaturedGuests() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-heading">Featured Guests</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-brand" />
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-3">
          {guests.map((guest) => (
            <div key={guest.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${guest.seed}/300/300`}
                alt={guest.name}
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <h5 className="mt-4 text-lg font-semibold text-heading">{guest.name}</h5>
              <span className="text-sm uppercase tracking-wide text-secondary">{guest.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

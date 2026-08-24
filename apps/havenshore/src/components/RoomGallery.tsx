const ROOMS = [
  { seed: 'havenshore-room1', label: 'Ocean View Suite' },
  { seed: 'havenshore-room2', label: 'Garden Villa' },
  { seed: 'havenshore-room3', label: 'Penthouse Suite' },
  { seed: 'havenshore-room4', label: 'Beachfront Bungalow' },
  { seed: 'havenshore-room5', label: 'Deluxe Room' },
]

export function RoomGallery() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {ROOMS.map((room) => (
            <div key={room.seed} className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${room.seed}/400/280`}
                alt={room.label}
                className="h-[220px] w-full object-cover transition hover:opacity-90"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-display text-lg font-medium text-ink">{room.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

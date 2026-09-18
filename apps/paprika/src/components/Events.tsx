export function Events() {
  return (
    <section id="events" className="py-16 bg-[#222222] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-[family-name:var(--font-cursive)] text-3xl text-[#b10400]">Events</h3>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase mt-1">
            Next Event
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://picsum.photos/seed/paprika-event/600/400"
            alt="Upcoming event"
            className="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-4">
              Grand Opening Night — Paprika Kitchen
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Join us for an unforgettable evening of live music, signature cocktails, and a tasting
              menu crafted by our award-winning chefs. Celebrate the launch of Paprika with friends,
              family, and fellow food lovers.
            </p>
            <a
              href="#"
              className="inline-block text-[#b10400] text-sm font-semibold uppercase hover:underline"
            >
              View Details →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

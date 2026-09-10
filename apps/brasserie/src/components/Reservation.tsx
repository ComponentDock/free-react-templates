export function Reservation() {
  return (
    <section
      id="reservation"
      className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/brasserie-reservation/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide">
          Reserve Your Desk
        </h2>
        <p className="mt-4 max-w-lg text-sm text-gray-300">
          Book your table for an unforgettable evening. Call us or visit in person to secure your
          reservation.
        </p>
        <a
          href="#reservation"
          className="mt-8 inline-block border-2 border-brand-red bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}

export function ReservationCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <img
        src="https://picsum.photos/seed/forkful-cta/1600/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold italic text-white sm:text-4xl">
          Natural ingredients and tasty food
        </h2>
        <p className="mt-4 text-base font-light text-white/80">
          Some trendy and popular courses offered
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-heading transition-colors hover:bg-transparent hover:text-white"
        >
          Reservation
        </a>
      </div>
    </section>
  )
}

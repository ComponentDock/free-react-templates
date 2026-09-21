export function ReservationCTA() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(19,18,48,0.7), rgba(19,18,48,0.7)), url(https://picsum.photos/seed/feastly-reserve/1600/600)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Natural ingredients and tasty food
        </h2>
        <h4 className="mt-4 font-sans text-lg italic capitalize text-white/80">
          Some trendy and popular courses offered
        </h4>
        <a
          href="#contact"
          className="mt-6 inline-block rounded border border-transparent bg-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-all hover:border-primary-400 hover:bg-transparent hover:text-primary-400"
        >
          Reservation
        </a>
      </div>
    </section>
  )
}

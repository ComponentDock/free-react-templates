export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-paper">
      <img
        src="https://picsum.photos/seed/pawcare-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold uppercase leading-tight text-ink sm:text-5xl lg:text-6xl">
            We Care Your Pets
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Loving, professional care for your furry family — boarding, healthy meals, spa days, and
            round-the-clock attention.
          </p>
          <button
            type="button"
            className="mt-8 inline-block border border-brand bg-white px-11 py-4 text-sm font-normal uppercase tracking-[3px] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

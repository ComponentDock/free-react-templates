export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/leopet-hero/1600/800"
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-10"
          fetchPriority="high"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 md:py-36">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Welcome to Leopet
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-heading sm:text-5xl dark:text-white">
          Give your pet Best Care
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
          Compassionate veterinary care, adoption, and everyday pet care from a team that treats
          your companion like family.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Our Services
          </a>
          <a
            href="#adopt"
            className="rounded-full border-2 border-brand px-8 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}

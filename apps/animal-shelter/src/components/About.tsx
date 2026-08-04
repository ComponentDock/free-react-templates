export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/animal-shelter-about/640/480"
          alt="About the shelter"
          className="w-full object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white lg:text-4xl">
            Globally Connected by Large Network
          </h2>
          <h3 className="mt-4 text-base font-medium text-brand">
            We are here to listen from you deliver excellence
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            Our shelter works with rescue partners across the country to give every animal a second
            chance. From first checkup to the day they meet their new family, we walk with you at
            every step of the adoption journey.
          </p>
          <button
            type="button"
            className="mt-8 inline-block bg-brand px-8 font-medium uppercase leading-[42px] text-white transition-colors hover:brightness-95"
          >
            get details
          </button>
        </div>
      </div>
    </section>
  )
}

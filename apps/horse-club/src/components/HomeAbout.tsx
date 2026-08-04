export function HomeAbout() {
  return (
    <section id="training" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/horseclub-homeabout/800/600"
          alt="Horses grazing in a sunny paddock"
          className="w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            We've made a life that will change you
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#service"
            className="mt-8 inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

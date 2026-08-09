export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            About Barber
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white lg:text-5xl">
            A Smooth Barber Experience In Your Town
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center rounded-full bg-brand px-9 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brand-dark hover:text-white"
          >
            Make an Appointment
          </a>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/razor-about/600/600"
            alt="Barber tools hanging on a wall"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

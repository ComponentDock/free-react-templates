export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/thepetcare-about/800/600"
          alt="Pet owner and dog enjoying quality care"
          className="w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <h2 className="font-display text-3xl leading-snug text-heading dark:text-white lg:text-4xl">
            The Kind of Care Your Pets Deserve
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts — happy pets and caring owners.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy3"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

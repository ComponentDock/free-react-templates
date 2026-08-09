const values = [
  {
    title: 'Our Mission',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Our Vision',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    title: 'Our Value',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/torquely-3/720/540"
          alt="Torquely mechanic repairing an engine"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Welcome to Torquely
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink dark:text-white sm:text-4xl">
            We help more than 45 years serving customer car
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-display text-base font-bold text-ink dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-white/60">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

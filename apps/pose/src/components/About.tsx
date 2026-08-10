export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/pose-about/640/560"
            alt="Pose model portrait"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold text-ink dark:text-white">Hello! Pose</h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand">
            A Professional Model Agency
          </p>
          <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist dark:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life. One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
      </div>
    </section>
  )
}

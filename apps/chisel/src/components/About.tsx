export function About() {
  return (
    <section id="about" aria-label="About us" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/chisel-about/800/600"
          alt="About us — architectural design"
          className="h-[320px] w-full rounded object-cover lg:h-[420px]"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-brand">About us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white lg:text-4xl">
            Chisel shapes buildings from concept to completion.
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block font-semibold text-brand underline-offset-4 hover:underline"
          >
            About us
          </a>
        </div>
      </div>
    </section>
  )
}

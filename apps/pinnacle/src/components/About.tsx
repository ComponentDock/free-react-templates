export function About() {
  return (
    <section id="about" aria-label="About us" className="bg-white py-20 dark:bg-night lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/pinnacle-about/800/600"
            alt="About us — architectural design"
            className="h-[320px] w-full object-cover lg:h-[420px]"
          />
          <p className="absolute bottom-[11%] left-[13%] bg-brand px-6 py-4 font-display text-4xl font-medium leading-none text-ink">
            26
            <span className="mt-1 block text-sm font-normal uppercase tracking-[2px]">
              Years of Creativity
            </span>
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-brand">About our Company</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-ink dark:text-white lg:text-4xl">
            We've been creating Awesome Since 1992
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt.
          </p>
          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-3 border-y border-ink/40 py-2 text-xs font-medium uppercase tracking-[3px] text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/40 dark:text-white dark:hover:border-brand dark:hover:text-brand"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}

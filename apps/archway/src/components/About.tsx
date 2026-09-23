export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="lg:w-2/5">
            <img
              src="https://picsum.photos/seed/archway-about/600/500"
              alt="Interior design project showcase"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="lg:w-3/5 lg:pl-10">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              About
            </span>
            <h2 className="mb-6 text-3xl font-bold text-ink sm:text-4xl">
              We are the best interior &amp; Architect Consultant in Italy
            </h2>
            <p className="mb-4 text-[#6c757d]">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word "and" and the Little Blind Text should turn around and
              return to its own, safe country.
            </p>
            <p className="mb-6 text-[#6c757d]">
              When she reached the first hills of the Italic Mountains, she had a last view back on
              the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
              subline of her own road, the Line Lane.
            </p>
            <a
              href="#projects"
              className="font-semibold text-accent transition-colors hover:text-accent-light"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

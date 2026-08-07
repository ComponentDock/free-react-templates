export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">About Us</p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-navy dark:text-white">
            52 Years of Experience in This Area
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-300">
            We create lasting impressions through architecture design. Every project starts with a
            conversation and ends with a space that speaks for itself — bold, functional, and built
            to last.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            About Us
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/keystone-about-1/500/700"
            alt="High-rise building at dusk"
            className="h-80 w-full object-cover lg:h-96"
          />
          <img
            src="https://picsum.photos/seed/keystone-about-2/500/500"
            alt="Architecture detail with red accent line"
            className="mt-10 h-64 w-full object-cover lg:h-72"
          />
        </div>
      </div>
    </section>
  )
}

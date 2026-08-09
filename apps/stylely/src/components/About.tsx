export function About() {
  return (
    <section id="about" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/stylely-about/800/900"
            alt="Barber shop interior with classic styling chairs"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Connect with your dream style
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Stylely is where classic barbering meets the latest trends. Our artists take the time to
            understand your face, your hair, and your personality before the first snip — so every
            visit ends with a look that is unmistakably you.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Walk in for a trim, stay for the hot-towel shave — the more effort you put into your
            style, the bigger the payoff you get.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}

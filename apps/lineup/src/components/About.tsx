export function About() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left — illustration / logo */}
          <div className="w-full lg:w-5/12">
            <img
              src="https://picsum.photos/seed/lineup-about/500/400"
              alt="Event showcase"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Right — text */}
          <div className="w-full lg:w-7/12">
            <h2 className="mb-6 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
              What is Lineup and why choose our services?
            </h2>
            <p className="mb-8 leading-relaxed text-[var(--color-body)]">
              Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus
              risus, pellentesque at facilisis et, scelerisque sit amet metus. Duis vel semper
              turpis, ac tempus libero. Maecenas id ultrices risus. Aenean nec ornare ipsum, lacinia
              volutpat urna.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-block rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-8 py-4 font-bold text-white transition-opacity hover:opacity-90"
              >
                Read More
              </a>
              <a
                href="#"
                className="inline-block rounded-full bg-[var(--color-dark-btn)] px-8 py-4 font-bold text-white transition-opacity hover:opacity-90"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

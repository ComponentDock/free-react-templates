export function About() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Centered heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-4xl uppercase tracking-wider text-white">
            About Program
          </h2>
          <p className="font-sans text-lg leading-relaxed text-body-text">
            The event regularly attracts a diverse range of attendees from around the world, across
            different professions, and with different.
          </p>
        </div>

        {/* Split layout: image left, text + CTA right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            {/* Decorative SVG shape */}
            <svg
              className="absolute -left-6 -top-6 h-20 w-20 text-brand/20"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <img
              src="https://picsum.photos/seed/gigfest-about/700/500"
              alt="About the concert program"
              className="relative w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="mb-4 font-heading text-2xl uppercase text-white">
              It&apos;s time to book your seat
            </h3>
            <p className="mb-8 font-sans text-lg leading-relaxed text-body-text">
              The event regularly attracts a diverse range of attendees from around the world,
              across different professions, and with different levels of experience transform your
              business.
            </p>
            <a
              href="#buy-tickets"
              className="inline-block rounded-none bg-brand px-8 py-3 font-heading text-sm uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

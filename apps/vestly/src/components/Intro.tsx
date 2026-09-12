export function Intro() {
  return (
    <section id="intro" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://picsum.photos/seed/vestly-intro/600/400"
              alt="Bitcoin illustration"
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              take a look at our
            </div>
            <h2 className="mb-6 text-3xl font-normal text-heading md:text-4xl">
              Buy and Sell Bitcoin
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-body-text">
              Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies
              orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
              mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut
              iaculis elit.
            </p>
            <a
              href="#"
              className="inline-block bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-dark transition-colors hover:bg-brand-hover"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium text-ink">Beautiful Experiences</h2>
          <p className="mx-auto max-w-xl text-mist">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Thumbnails */}
          <div className="flex w-full gap-4 lg:w-1/2">
            <img
              src="https://picsum.photos/seed/lumina-exp1/400/300"
              alt="Experience 1"
              className="w-1/2 rounded object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/lumina-exp2/400/300"
              alt="Experience 2"
              className="w-1/2 rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="mb-3 text-2xl font-medium text-ink">Vector Illustration</h3>
            <h4 className="mb-4 text-lg font-medium text-ink">
              LCD screens are uniquely modern in style, and the liquid crystals that make them work
              have allowed.
            </h4>
            <p className="mb-6 text-mist">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition hover:bg-brand-dark"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

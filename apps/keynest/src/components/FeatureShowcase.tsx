export function FeatureShowcase() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold text-heading">
              Just browse away.
              <br />
              It's all here.
            </h2>
            <p className="mb-4 text-body">
              Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
              Et netus malesuada fames.
            </p>
            <p className="mb-8 text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper
              dignissim cras tincidunt lobortis feugiat.
            </p>
            <a
              href="#property"
              className="inline-block rounded border-2 border-primary px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Browse Property
            </a>
          </div>
          <div className="flex-1">
            <div className="relative h-80 overflow-hidden rounded-lg lg:h-96">
              <img
                src="https://picsum.photos/seed/keynest-feature/800/600"
                alt="Featured property showcase"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="bg-light-bg py-20" aria-label="About">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/seed/carepath-about/800/600"
              alt="About CarePath"
              className="w-full rounded object-cover shadow-md"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold font-serif text-heading md:text-4xl">
              Second Abundantly Move That Cattle Perform Appen Land
            </h2>
            <p className="mb-6 text-body-text leading-relaxed">
              Give their their without moving were stars called so divide female be moving night may
              fish him own male created great opportunity deal. Stars called so divide female moving
              night may fish him own male created great.
            </p>
            <a
              href="#"
              className="inline-block bg-brand px-8 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors self-start"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

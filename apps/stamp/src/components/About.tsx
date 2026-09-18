export function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/stamp-about/600/400"
              alt="Manufacturing facility"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-5/12">
            <h2 className="text-3xl font-semibold leading-snug text-ink md:text-4xl">
              We Are Committed To Customer Satisfaction
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              Their be void upon image lights you fifth seed wherein for very mud the winged his
              days fruitful. Stars fruit fourth.
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              Fifth darkness lights after sixth first Firmament morning and the Green saying great
              forth behold open said First she'd saying have any question availbla now their void
              upon image lights.
            </p>
            <a
              href="#"
              className="mt-6 inline-block rounded-full bg-ink px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

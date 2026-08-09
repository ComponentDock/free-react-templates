export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/taper-about/640/720"
            alt="Barber trimming a client's hair in the studio"
            className="aspect-[8/9] w-full object-cover"
          />
          <div
            className="absolute -bottom-6 -right-4 flex h-32 w-32 flex-col items-center justify-center bg-brand text-center text-white shadow-lg sm:-right-6"
            aria-hidden="true"
          >
            <span className="font-display text-4xl font-bold">52</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Years</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            About Our Barbershop
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            52 Years Of Experience In Hair cut!
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Brook presents your services with flexible, convenient and cdpose layouts. You can
            select your favorite layouts & elements for particular purposes with one click. Our shop
            has served the city's sharpest styles for more than five decades.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            From classic barbering to contemporary trends, every visit starts with a consultation
            and ends with a cut that fits your face, your lifestyle, and your confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/snip-about/800/900"
            alt="Barber shop interior with classic styling chairs"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-navy dark:text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            For over a decade, Snip has been the neighborhood traditional barber shop where craft
            meets trend. Our barbers blend classic techniques with modern cuts to give every client
            a look that fits.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Walk in for a trim, stay for the hot-towel shave — every visit ends with a sharp finish
            and a smile.
          </p>
        </div>
      </div>
    </section>
  )
}

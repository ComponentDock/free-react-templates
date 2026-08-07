export function BigQuote() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <blockquote className="font-serif text-3xl font-bold leading-snug text-ink dark:text-white">
            <span className="text-brand">“ </span>
            The calm settles over you the moment you step inside — every detail made for rest.
            <span className="text-brand"> ”</span>
          </blockquote>
          <p className="mt-6 font-semibold text-mist dark:text-gray-400">
            — Jean Doe, Spa Customer
          </p>
        </div>
        <div className="flex items-start">
          <img
            src="https://picsum.photos/seed/halcyon-about-1/600/400"
            alt="Spa treatment room"
            className="h-80 w-3/5 rounded-lg object-cover shadow-lg"
          />
          <img
            src="https://picsum.photos/seed/halcyon-about-2/600/400"
            alt="Massage session"
            className="mt-10 -ml-10 h-80 w-3/5 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

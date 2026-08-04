export function Quote() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl leading-snug text-heading dark:text-white lg:text-4xl">
            Animals has come to mean so much in t live
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
          </p>
        </div>
        <img
          src="https://picsum.photos/seed/thepetcare-quote/800/600"
          alt="Dogs resting after a spa day"
          className="w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>
  )
}

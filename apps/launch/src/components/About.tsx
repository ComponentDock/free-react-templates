const news = [
  {
    title: 'Far far away behind the word mountains far from the countries',
    date: 'March 12, 2026',
  },
  {
    title: 'Far far away behind the word mountains far from the countries',
    date: 'February 28, 2026',
  },
  {
    title: 'Far far away behind the word mountains far from the countries',
    date: 'January 19, 2026',
  },
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
              About Us
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <img
              src="https://picsum.photos/seed/launch-about/640/480"
              alt="Launch about preview"
              className="mt-8 w-full max-w-md rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">Our News</h2>
            <ul className="mt-6 space-y-6">
              {news.map((item, index) => (
                <li key={item.date} className="flex gap-4">
                  <img
                    src={`https://picsum.photos/seed/launch-news-${index}/120/90`}
                    alt=""
                    className="h-20 w-28 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                      {item.date}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink dark:text-white">
                      {item.title}
                    </h3>
                    <a
                      href="#about"
                      className="mt-2 inline-block text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400"
                    >
                      Read more
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

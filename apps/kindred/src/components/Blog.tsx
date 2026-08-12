import { blogEntries } from '../data'

export function Blog() {
  const featured = blogEntries[0]!
  const thumbs = blogEntries.slice(1)

  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white lg:text-4xl">
            Recent Blog
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <article className="overflow-hidden rounded-sm border border-gray-100 shadow-sm dark:border-gray-800">
            <img
              src="https://picsum.photos/seed/kindred-blog-1/600/400"
              alt={featured.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                {featured.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{featured.date}</span>
                <span aria-hidden="true"> / </span>
                <span>{featured.author}</span>
                <span aria-hidden="true"> / </span>
                <span>{featured.comments} Comments</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </article>

          <div className="space-y-8">
            {thumbs.map((entry, index) => (
              <article key={entry.title} className="flex gap-5">
                <img
                  src={`https://picsum.photos/seed/kindred-blog-${index + 2}/200/160`}
                  alt=""
                  className="h-20 w-24 shrink-0 rounded-sm object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{entry.date}</span>
                    <span aria-hidden="true"> / </span>
                    <span>{entry.author}</span>
                    <span aria-hidden="true"> / </span>
                    <span>{entry.comments} Comments</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

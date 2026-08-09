const posts = [{ seed: 'torquely-6' }, { seed: 'torquely-7' }, { seed: 'torquely-8' }] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            News &amp; Blog
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Latest news from our blog
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.seed}
              className="overflow-hidden rounded-2xl bg-paper transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt=""
                className="aspect-[8/5] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Posted by John doe · 24 February 2020
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    Best wheel alignment &amp; air conditioning
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. {index + 1}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const posts = [
  { seed: 'colid-blog-1' },
  { seed: 'colid-blog-2' },
  { seed: 'colid-blog-3' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-4xl">
            Beautiful Place for your Great Journey
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={post.seed} className="rounded-md bg-white p-5 shadow-sm dark:bg-gray-950">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={`Blog post ${i + 1} illustration`}
                className="aspect-[3/2] w-full rounded-md object-cover"
              />
              <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900 dark:text-white">
                <a
                  href="#blog"
                  className="transition-colors hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Beautiful Place for your Great Journey
                </a>
              </h3>
              <div className="mt-3 text-sm text-gray-400 dark:text-gray-500">
                Admin <span className="mx-2">|</span> Feb 01, 2017
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo eaque expedita
                aliquid dolorem repellat perferendis, facilis aut fugit, impedit.
              </p>
              <p className="mt-4">
                <a
                  href="#blog"
                  className="text-sm font-medium text-primary-500 transition-colors hover:text-primary-600 dark:text-primary-400"
                >
                  Read more
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

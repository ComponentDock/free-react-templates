const posts = [
  {
    title: 'Building the Mention Sales Application on Blueprint',
    date: 'May 12, 2018',
    image: 'https://picsum.photos/seed/blueprint-blog-1/640/400',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
  },
  {
    title: 'Building the Mention Sales Application on Blueprint',
    date: 'May 12, 2018',
    image: 'https://picsum.photos/seed/blueprint-blog-2/640/400',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
  },
  {
    title: 'Building the Mention Sales Application on Blueprint',
    date: 'May 12, 2018',
    image: 'https://picsum.photos/seed/blueprint-blog-3/640/400',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            News from our Blog
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={post.image}
                alt="Blueprint blog post illustration"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  {post.date}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {post.blurb}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  by Dave Miller
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

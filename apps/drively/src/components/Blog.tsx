const posts = [
  {
    title: 'The best car rent in the entire planet',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: '5 tips for a smooth road trip',
    meta: 'July 12, 2019 by Admin',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    title: 'How to choose the right rental car',
    meta: 'July 5, 2019 by Admin',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black text-ink dark:text-white">
          Our Blog
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/drively-blog-${index + 1}/600/360`}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-black text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-brand">
                  {post.meta}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const posts = [
  {
    title: 'Tips for Perfect Makeup',
    image: 'https://picsum.photos/seed/terra-blog-1/800/600',
    date: 'Mar. 31, 2021',
    comments: '3 Comments',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    title: 'Tips for Perfect Makeup',
    image: 'https://picsum.photos/seed/terra-blog-2/800/600',
    date: 'Mar. 31, 2021',
    comments: '3 Comments',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    title: 'Tips for Perfect Makeup',
    image: 'https://picsum.photos/seed/terra-blog-3/800/600',
    date: 'Mar. 31, 2021',
    comments: '3 Comments',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Blog
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl dark:text-white">
          Recent From Blog
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.image} className="group">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand">
                {post.date} · {post.comments}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug text-ink transition-colors group-hover:text-brand dark:text-white">
                <a href="#blog">{post.title}</a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

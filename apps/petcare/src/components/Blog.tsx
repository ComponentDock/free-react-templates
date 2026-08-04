const posts = [
  {
    title: 'Amazing Places To Visit In Summer',
    seed: 'petcare-blog-1',
    excerpt:
      'Planning a summer trip? Here are the most pet-friendly destinations to explore together.',
  },
  {
    title: 'Developing Creativithout Losing Visual',
    seed: 'petcare-blog-2',
    excerpt: 'Simple enrichment games that keep your pet sharp, engaged, and wonderfully creative.',
  },
  {
    title: 'Winter Photography Tips from Glenn',
    seed: 'petcare-blog-3',
    excerpt: 'Capture the perfect winter portrait of your furry friend with these expert tips.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-navy dark:text-white">
          Our Recent Blog
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-muted dark:text-gray-400">
          Tips and stories from our team of pet experts.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/480/320`}
                alt=""
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Pet Care Tips
                </p>
                <h3 className="mt-3 text-lg font-bold text-navy dark:text-white">{post.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-red-600"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const posts = [
  {
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
    date: '25 October, 2024',
    author: 'Mark Wiens',
    seed: 'velox-blog-1',
  },
  {
    title: 'Make Myspace Your Best Designed Space',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
    date: '25 October, 2024',
    author: 'Mark Wiens',
    seed: 'velox-blog-2',
  },
  {
    title: 'Video Games Playing With Imagination',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
    date: '25 October, 2024',
    author: 'Mark Wiens',
    seed: 'velox-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase text-gray-900 font-[family-name:var(--font-heading)]">
            Latest Posts from Blog
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/360`}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-gray-400">
                  {post.date} | By {post.author}
                </p>
                <h3 className="mt-2 text-base font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

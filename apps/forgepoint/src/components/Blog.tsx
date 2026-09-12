const POSTS = [
  {
    img: 'forgepoint-blog-1',
    date: 'November 24, 2020',
    category: 'Manufacturing',
    title: 'David Droga Still Has Faith In Advertising',
  },
  {
    img: 'forgepoint-blog-2',
    date: 'November 24, 2020',
    category: 'Manufacturing',
    title: 'David Droga Still Has Faith In Advertising',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {POSTS.map((post) => (
            <article key={post.img} className="group">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.img}/800/450`}
                  alt={post.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <ul className="flex gap-4 text-xs text-gray-400">
                  <li>{post.date}</li>
                  <li>{post.category}</li>
                </ul>
                <h3 className="mt-3 font-display text-xl font-bold text-ink dark:text-white">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

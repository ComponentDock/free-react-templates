const posts = [
  {
    category: 'Interior',
    title: 'Design trends that bring light into modern homes',
  },
  {
    category: 'Architecture',
    title: 'How rooftop gardens change the city skyline',
  },
  {
    category: 'Lifestyle',
    title: 'A walk through our latest waterfront development',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Blog</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Our Blog
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={`https://picsum.photos/seed/skyline-blog-${index + 1}/700/460`}
                  alt={post.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[1.6px] text-brand">
                {post.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand dark:text-white">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

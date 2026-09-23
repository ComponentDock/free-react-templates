const posts = [
  {
    title: 'The Future of Web Design Trends in 2025',
    date: 'March 15, 2025',
    image: 'https://picsum.photos/seed/cardwell-blog-1/600/400',
    category: 'Design',
  },
  {
    title: 'Building Scalable Applications with Modern Tools',
    date: 'February 28, 2025',
    image: 'https://picsum.photos/seed/cardwell-blog-2/600/400',
    category: 'Development',
  },
  {
    title: 'Creative Process: From Concept to Completion',
    date: 'January 10, 2025',
    image: 'https://picsum.photos/seed/cardwell-blog-3/600/400',
    category: 'Creative',
  },
]

export function Blog() {
  return (
    <section id="blog" className="relative bg-[#fafafa] py-24" role="region" aria-label="Blog">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-heading)] text-[250px] font-bold uppercase leading-none text-[#f0f0f0] opacity-50"
      >
        Blog
      </span>

      {/* Rotated vertical label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[4px] text-gray-300"
      >
        Latest Posts
      </span>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer overflow-hidden rounded">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-gray-400">{post.date}</p>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-bold text-heading transition-colors hover:text-brand">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

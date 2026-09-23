interface BlogPost {
  title: string
  category: string
  date: string
  month: string
  imageSeed: string
}

const posts: BlogPost[] = [
  {
    title: 'Footprints in Time is perfect House in Kurashiki',
    category: 'Properties',
    date: '24',
    month: 'Now',
    imageSeed: 'jobscout-blog1',
  },
  {
    title: 'Footprints in Time is perfect House in Kurashiki',
    category: 'Properties',
    date: '24',
    month: 'Now',
    imageSeed: 'jobscout-blog2',
  },
]

export function Blog() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-brand">
            Our latest blog
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">Our recent news</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <article key={`${post.imageSeed}-${i}`} className="group">
              <div className="relative overflow-hidden rounded">
                <img
                  src={`https://picsum.photos/seed/${post.imageSeed}/600/400`}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-brand px-4 py-2 text-center text-white">
                  <span className="block text-2xl font-bold leading-none">{post.date}</span>
                  <span className="text-xs">{post.month}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm text-gray-400">|&nbsp;&nbsp;{post.category}</p>
                <h3 className="text-xl font-semibold text-navy transition-colors group-hover:text-brand">
                  <a href="#">{post.title}</a>
                </h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
                  Read more &raquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

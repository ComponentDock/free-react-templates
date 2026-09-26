interface BlogPost {
  image: string
  category: string
  date: string
  author: string
  title: string
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/pixelate-blog1/600/400',
    category: 'Design',
    date: '12 March',
    author: 'Alex',
    title: 'The Future of Digital Product Design in 2026',
  },
  {
    image: 'https://picsum.photos/seed/pixelate-blog2/600/400',
    category: 'Tips',
    date: '28 February',
    author: 'Alex',
    title: '10 UI Patterns That Actually Improve UX',
  },
  {
    image: 'https://picsum.photos/seed/pixelate-blog3/600/400',
    category: 'Strategy',
    date: '15 February',
    author: 'Alex',
    title: "From Wireframe to Launch: A Designer's Workflow",
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display mb-12 text-3xl font-bold text-ink md:text-4xl">Latest News</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {post.category}
                </span>
                <p className="mb-2 text-xs text-mist">
                  {post.date} | by {post.author}
                </p>
                <h3 className="text-base font-bold text-ink transition-colors group-hover:text-brand">
                  <a href="#blog">{post.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

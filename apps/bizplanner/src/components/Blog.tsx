interface Post {
  title: string
  author: string
  date: string
  excerpt: string
  image: string
}

const posts: Post[] = [
  {
    title: 'Top 10 Business Strategies for 2025',
    author: 'Admin',
    date: 'Oct 15, 2025',
    excerpt:
      'Discover the most effective business strategies that will help you grow your company in the coming year.',
    image: 'https://picsum.photos/seed/bizplanner-blog-1/400/250',
  },
  {
    title: 'The Future of Digital Marketing',
    author: 'Admin',
    date: 'Oct 10, 2025',
    excerpt:
      'Digital marketing is evolving rapidly. Learn about the latest trends and how to stay ahead of the curve.',
    image: 'https://picsum.photos/seed/bizplanner-blog-2/400/250',
  },
  {
    title: 'Building a Strong Online Presence',
    author: 'Admin',
    date: 'Oct 5, 2025',
    excerpt:
      'A strong online presence is essential for modern businesses. Here are the key steps to building yours.',
    image: 'https://picsum.photos/seed/bizplanner-blog-3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog-section" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-heading">
          Our Latest Blog
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href="#blog-section"
                  className="absolute inset-0 flex items-center justify-center bg-primary-500/80 text-sm font-bold uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Read More
                </a>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-heading">{post.title}</h3>
                <div className="mb-3 flex gap-3 text-xs text-smoke">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
                <a
                  href="#blog-section"
                  className="text-sm font-bold uppercase text-primary-500 hover:text-primary-600"
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

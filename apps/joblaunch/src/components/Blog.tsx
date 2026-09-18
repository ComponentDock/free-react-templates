interface BlogPost {
  image: string
  author: string
  date: string
  title: string
  excerpt: string
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/blog1/600/400',
    author: 'John Smith',
    date: 'Sep 15, 2026',
    title: 'How To Ace Your Remote Job Interview',
    excerpt: 'Master the art of remote interviews with these proven tips from hiring managers.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/600/400',
    author: 'Lisa Chen',
    date: 'Sep 12, 2026',
    title: 'Top 10 In-Demand Skills For 2026',
    excerpt:
      "Discover the skills that employers are actively seeking in today's competitive market.",
  },
  {
    image: 'https://picsum.photos/seed/blog3/600/400',
    author: 'Mark Wilson',
    date: 'Sep 10, 2026',
    title: 'Building A Career In Tech',
    excerpt: 'A comprehensive guide to launching and growing your career in the technology sector.',
  },
  {
    image: 'https://picsum.photos/seed/blog4/600/400',
    author: 'Anna Davis',
    date: 'Sep 8, 2026',
    title: 'Work-Life Balance Tips',
    excerpt:
      'Practical strategies for maintaining a healthy balance between work and personal life.',
  },
]

export function Blog() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Latest Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="text-xs text-ink-muted mb-2">
                <span className="text-primary font-semibold">{post.author}</span>
                <span className="mx-2">·</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-ink mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

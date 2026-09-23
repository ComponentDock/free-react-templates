const posts = [
  {
    date: 'Sep 15, 2026',
    title: 'The Future of Creative Design in 2026',
    description:
      'Exploring emerging trends that are shaping the creative industry this year and beyond.',
    image: 'https://picsum.photos/seed/atelier-blog-1/400/250',
  },
  {
    date: 'Sep 12, 2026',
    title: 'Building Scalable Web Applications',
    description:
      'Best practices for architecture and performance when building modern web platforms.',
    image: 'https://picsum.photos/seed/atelier-blog-2/400/250',
  },
  {
    date: 'Sep 10, 2026',
    title: 'Branding Tips for Startups',
    description:
      'How to create a memorable brand identity that resonates with your target audience.',
    image: 'https://picsum.photos/seed/atelier-blog-3/400/250',
  },
  {
    date: 'Sep 8, 2026',
    title: 'UX Principles That Drive Conversions',
    description:
      'User experience strategies that turn visitors into loyal customers and advocates.',
    image: 'https://picsum.photos/seed/atelier-blog-4/400/250',
  },
  {
    date: 'Sep 5, 2026',
    title: 'The Power of Color in Design',
    description: 'Understanding color psychology and how to leverage it in your visual identity.',
    image: 'https://picsum.photos/seed/atelier-blog-5/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-brand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Blog</p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">Latest Blog Posts</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <time className="text-xs text-navy/40">{post.date}</time>
                <h3 className="mt-1 text-sm font-bold text-navy">{post.title}</h3>
                <p className="mt-1 text-xs text-navy/50">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

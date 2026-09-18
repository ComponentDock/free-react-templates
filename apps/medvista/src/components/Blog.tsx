const posts = [
  {
    image: 'https://picsum.photos/seed/medvista-blog-1/400/250',
    date: 'Sep 10, 2026',
    author: 'Dr. Wilson',
    comments: 3,
    title: 'Tips for Maintaining Heart Health',
    excerpt:
      'Discover the essential daily habits that can significantly improve your cardiovascular health and reduce the risk of heart disease.',
  },
  {
    image: 'https://picsum.photos/seed/medvista-blog-2/400/250',
    date: 'Sep 8, 2026',
    author: 'Dr. Chen',
    comments: 5,
    title: 'Understanding Neurological Wellness',
    excerpt:
      'Learn about the latest advances in neuroscience and how they can help you maintain optimal brain function.',
  },
  {
    image: 'https://picsum.photos/seed/medvista-blog-3/400/250',
    date: 'Sep 5, 2026',
    author: 'Dr. Rodriguez',
    comments: 2,
    title: 'Vision Care for Every Age',
    excerpt:
      'A comprehensive guide to protecting your eyesight from childhood through your golden years.',
  },
  {
    image: 'https://picsum.photos/seed/medvista-blog-4/400/250',
    date: 'Sep 3, 2026',
    author: 'Dr. Thompson',
    comments: 7,
    title: 'Modern Dental Hygiene Practices',
    excerpt:
      'Explore the newest techniques and products that can elevate your oral health routine.',
  },
  {
    image: 'https://picsum.photos/seed/medvista-blog-5/400/250',
    date: 'Sep 1, 2026',
    author: 'Dr. Wilson',
    comments: 4,
    title: 'When to Visit a Specialist',
    excerpt:
      'Understanding the signs that indicate you should seek specialized medical attention rather than general care.',
  },
  {
    image: 'https://picsum.photos/seed/medvista-blog-6/400/250',
    date: 'Aug 28, 2026',
    author: 'Dr. Chen',
    comments: 1,
    title: 'The Importance of Regular Checkups',
    excerpt:
      'Why preventive medicine is the most effective approach to long-term health and wellness.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20" data-testid="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink">Gets Every Single Updates Here</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="text-brand">{post.author}</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-body">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block rounded bg-brand px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
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

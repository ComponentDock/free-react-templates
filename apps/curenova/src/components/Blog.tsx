const posts = [
  {
    title: 'Understanding Heart Health: Tips for a Healthy Lifestyle',
    excerpt:
      'Cardiovascular health is crucial for overall well-being. Learn about diet, exercise, and lifestyle changes that support your heart.',
    date: 'Sep 10, 2026',
    author: 'Dr. Sarah Mitchell',
    img: 'https://picsum.photos/seed/curenova-blog1/600/400',
  },
  {
    title: 'The Importance of Regular Health Check-ups',
    excerpt:
      'Preventive care is the cornerstone of good health. Discover why scheduling annual check-ups can save lives.',
    date: 'Sep 5, 2026',
    author: 'Dr. James Anderson',
    img: 'https://picsum.photos/seed/curenova-blog2/600/400',
  },
  {
    title: 'Pediatric Care: What Every Parent Should Know',
    excerpt:
      'From newborn care to adolescent health, understanding pediatric medicine helps parents make informed decisions.',
    date: 'Aug 28, 2026',
    author: 'Dr. Emily Chen',
    img: 'https://picsum.photos/seed/curenova-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-band-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink-900">Recent blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-2 text-xs text-mute-600">
                  {post.date} &middot; {post.author}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-900">{post.title}</h3>
                <p className="mb-4 text-sm text-mute-600">{post.excerpt}</p>
                <a href="#blog" className="text-sm font-medium text-blue-400 hover:text-blue-500">
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

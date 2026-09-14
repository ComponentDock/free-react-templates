const posts = [
  {
    title: 'Getting Started with Mechbot Alpha',
    excerpt:
      'A beginner-friendly guide to unboxing, assembling, and programming your first robotic arm.',
    image: 'https://picsum.photos/seed/mechbot-blog1/400/250',
    date: 'Sep 5, 2026',
  },
  {
    title: 'Building an Autonomous Rover',
    excerpt: 'Learn how to add LiDAR-based navigation to your Mechbot Rover for true autonomy.',
    image: 'https://picsum.photos/seed/mechbot-blog2/400/250',
    date: 'Aug 22, 2026',
  },
  {
    title: 'Top 10 STEM Projects with Mechbot',
    excerpt:
      'From pick-and-place machines to line followers — projects that inspire young engineers.',
    image: 'https://picsum.photos/seed/mechbot-blog3/400/250',
    date: 'Aug 10, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Latest from Mechbot
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Guides, tutorials, and stories from our community of makers.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <time className="text-xs font-medium uppercase tracking-wider text-brand">
                  {post.date}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-heading">{post.title}</h3>
                <p className="mt-2 text-sm text-body">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

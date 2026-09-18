import { Calendar, User } from 'lucide-react'

const posts = [
  {
    title: 'The Importance of Regular Health Checkups',
    date: 'Sep 15, 2025',
    author: 'Dr. Emily Clark',
    image: 'https://picsum.photos/seed/healwise-blog1/400/250',
    excerpt:
      'Regular health checkups are essential for early detection and prevention of potential health issues.',
  },
  {
    title: 'Tips For Maintaining A Healthy Heart',
    date: 'Sep 10, 2025',
    author: 'Dr. Robert Lee',
    image: 'https://picsum.photos/seed/healwise-blog2/400/250',
    excerpt:
      'A healthy heart is the foundation of overall well-being. Learn the key habits for cardiovascular health.',
  },
  {
    title: 'Understanding Modern Dental Care',
    date: 'Sep 5, 2025',
    author: 'Dr. Sarah Kim',
    image: 'https://picsum.photos/seed/healwise-blog3/400/250',
    excerpt:
      'Advances in dental care have made treatments more comfortable and effective than ever before.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-page py-20" data-testid="blog">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">Blog</p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Latest Health News</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
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

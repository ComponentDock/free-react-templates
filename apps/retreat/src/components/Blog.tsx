import { ArrowRight } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/retreat-blog1/600/400',
    date: 'Jan 15, 2025',
    category: 'Travel',
    title: 'Top 10 Destinations for 2025',
    excerpt:
      'Discover the most breathtaking travel destinations that should be on your bucket list this year.',
  },
  {
    image: 'https://picsum.photos/seed/retreat-blog2/600/400',
    date: 'Feb 03, 2025',
    category: 'Wellness',
    title: 'The Art of Relaxation',
    excerpt: 'Learn how our spa treatments can help you unwind and rejuvenate during your stay.',
  },
  {
    image: 'https://picsum.photos/seed/retreat-blog3/600/400',
    date: 'Mar 12, 2025',
    category: 'Dining',
    title: 'Farm to Table Experience',
    excerpt:
      'Our chefs share their philosophy on fresh, locally sourced ingredients for unforgettable meals.',
  },
]

export function Blog() {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand text-sm tracking-widest uppercase mb-2">Our Blog</p>
          <h2 className="text-3xl font-bold text-body">Latest News &amp; Events</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex gap-3 text-sm text-muted mb-3">
                  <span>{post.date}</span>
                  <span className="text-brand">{post.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-body mb-2 hover:text-brand cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-brand font-medium hover:text-brand-dark transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/tint-blog1/600/400',
    date: 'Feb 14, 2024',
    comments: 12,
    title: 'Trends in Modern Interior Design for 2024',
    excerpt:
      'Explore the latest design trends that are shaping how we think about living and working spaces.',
  },
  {
    image: 'https://picsum.photos/seed/tint-blog2/600/400',
    date: 'Feb 10, 2024',
    comments: 8,
    title: 'How to Choose the Right Color Palette',
    excerpt:
      'A comprehensive guide to selecting colors that complement your space and reflect your personality.',
  },
  {
    image: 'https://picsum.photos/seed/tint-blog3/600/400',
    date: 'Feb 06, 2024',
    comments: 5,
    title: 'Small Space, Big Impact: Maximizing Tiny Rooms',
    excerpt:
      'Smart strategies to make the most of limited square footage without sacrificing style or comfort.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-500">
            About Our Company
          </span>
          <h2 className="text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)] md:text-4xl">
            Some statistics that we want
            <br />
            to show our viewers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group">
              <div className="relative mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 flex gap-3">
                  <span className="flex items-center gap-1 bg-white/90 px-3 py-1 text-xs font-medium text-navy-800 backdrop-blur-sm">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 bg-white/90 px-3 py-1 text-xs font-medium text-navy-800 backdrop-blur-sm">
                    <MessageCircle size={12} />
                    {post.comments} comments
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy-800 font-[family-name:var(--font-condensed)]">
                <a href="#" className="transition-colors hover:text-gold-500">
                  {post.title}
                </a>
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

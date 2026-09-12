import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How fiber optics are transforming rural connectivity',
    date: 'January 22, 2025',
    image: 'https://picsum.photos/seed/blinkwave-blog1/400/260',
    slug: '#',
  },
  {
    title: '5 tips to boost your home Wi-Fi performance',
    date: 'February 10, 2025',
    image: 'https://picsum.photos/seed/blinkwave-blog2/400/260',
    slug: '#',
  },
  {
    title: 'Why uptime guarantees matter for businesses',
    date: 'March 5, 2025',
    image: 'https://picsum.photos/seed/blinkwave-blog3/400/260',
    slug: '#',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-signal-400">
            Our Blog
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
            Latest news and updates from Blinkwave.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-[0_10px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {post.date}
              </p>
              <h3 className="mb-3 text-lg font-bold leading-snug text-navy-800">
                <a href={post.slug} className="transition-colors hover:text-signal-400">
                  {post.title}
                </a>
              </h3>
              <a
                href={post.slug}
                className="inline-flex items-center gap-1 text-sm font-bold text-signal-400 transition-colors hover:text-signal-500"
              >
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

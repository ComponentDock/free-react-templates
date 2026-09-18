import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Community Outreach Program Launch',
    date: 'Sep 12',
    excerpt:
      'We are excited to announce our new community outreach initiative aimed at supporting local families in need.',
    image: 'https://picsum.photos/seed/sacredgate-news1/400/250',
  },
  {
    title: 'Youth Conference 2026',
    date: 'Sep 8',
    excerpt:
      'Join us for an inspiring weekend of worship, workshops, and fellowship for young adults.',
    image: 'https://picsum.photos/seed/sacredgate-news2/400/250',
  },
  {
    title: 'Annual Harvest Festival',
    date: 'Sep 1',
    excerpt:
      'Save the date for our beloved annual harvest festival with food, games, and community fun.',
    image: 'https://picsum.photos/seed/sacredgate-news3/400/250',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Latest News
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden border border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#news"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

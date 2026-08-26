import { ArrowRight } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/logistico-news1/800/500',
    date: 'Jan 18, 2024',
    category: 'Logistics',
    title: 'Freight Transport in Alaska: The Haul of the Wild',
    excerpt:
      'Discover the challenges and rewards of freight transport in one of the most remote regions on Earth.',
  },
  {
    image: 'https://picsum.photos/seed/logistico-news2/800/500',
    date: 'Jan 12, 2024',
    category: 'Tips',
    title: 'Delivery Your Stuff Quickly for Minimum Cost',
    excerpt:
      'Smart strategies to optimize your shipping costs without compromising on delivery speed.',
  },
  {
    image: 'https://picsum.photos/seed/logistico-news3/800/500',
    date: 'Jan 05, 2024',
    category: 'Industry',
    title: 'Perishable Logistics: Cold Chain on a Plane',
    excerpt:
      'How the cold chain industry ensures perishable goods remain fresh from origin to destination.',
  },
] as const

export function LatestNews() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-dark">Latest News</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Stay updated with the latest trends and insights in logistics and freight transport.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs text-mist">{post.date}</div>
                <h3 className="mb-2 text-lg font-bold text-dark">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

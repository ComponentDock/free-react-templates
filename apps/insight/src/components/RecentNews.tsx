import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'The Future of Business Consulting',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/insight-news1/400/300',
  },
  {
    title: '5 Strategies for Growth',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/insight-news2/400/300',
  },
  {
    title: 'Navigating Market Changes',
    date: 'Aug 28, 2026',
    image: 'https://picsum.photos/seed/insight-news3/400/300',
  },
]

export function RecentNews() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-navy-dark">Our Recent News</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="mb-2 text-xs text-muted">{post.date}</p>
                <h3 className="mb-3 text-base font-semibold text-navy-dark">{post.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  See more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

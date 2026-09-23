import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'Discover how effective lead generation strategies can transform your business and drive sustainable growth.',
    date: '12',
    month: 'Mar',
    year: '2026',
    seed: 'byteops-blog1',
  },
  {
    title: 'Top Digital Marketing Trends for 2026',
    excerpt:
      'Stay ahead of the curve with the latest digital marketing trends that are shaping the industry.',
    date: '10',
    month: 'Mar',
    year: '2026',
    seed: 'byteops-blog2',
  },
  {
    title: 'How to Build a Strong Online Presence',
    excerpt:
      'Learn the essential steps to establishing and maintaining a powerful online presence for your brand.',
    date: '05',
    month: 'Mar',
    year: '2026',
    seed: 'byteops-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">Blog</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Blog</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Insights and updates from our team on digital strategy, design, and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-bold text-ops-400">{p.date}</span>
                  <span>
                    {p.month} {p.year}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{p.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ops-400 transition-colors hover:text-ops-500"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

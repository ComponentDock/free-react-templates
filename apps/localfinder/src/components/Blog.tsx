import { Calendar } from 'lucide-react'

const posts = [
  {
    title: 'How to Find the Best Local Services in Your Area',
    excerpt:
      'Discover tips and tricks for finding top-rated local businesses and services near you.',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/lf-blog1/400/250',
  },
  {
    title: 'Top 10 Restaurants to Visit This Weekend',
    excerpt:
      'Explore our curated list of the best dining spots in your city for the perfect weekend.',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/lf-blog2/400/250',
  },
  {
    title: 'Why Local Shopping Matters More Than Ever',
    excerpt:
      'Supporting local businesses builds stronger communities and keeps neighborhoods vibrant.',
    date: 'Sep 8, 2026',
    image: 'https://picsum.photos/seed/lf-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-page">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-3">Latest News</h2>
        <p className="text-muted text-sm mb-10">
          Discover amazing places and services in your neighborhood
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-muted text-xs mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h3 className="text-ink font-semibold text-sm mb-2">{post.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

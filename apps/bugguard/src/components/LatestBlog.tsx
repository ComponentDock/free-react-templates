import { Calendar } from 'lucide-react'

const posts = [
  {
    featured: true,
    image: 'https://picsum.photos/seed/bugguard-blog1/600/400',
    date: '13 January 2020',
    category: 'Tips',
    title: 'How to Keep Your Home Pest-Free This Season',
    excerpt: 'Simple preventive measures that can save you from costly infestations down the road.',
  },
  {
    featured: false,
    image: 'https://picsum.photos/seed/bugguard-blog2/400/300',
    date: '10 January 2020',
    category: 'Control',
    title: 'Understanding Cockroach Behavior',
    excerpt: 'Learn why cockroaches invade homes and how to stop them.',
  },
  {
    featured: false,
    image: 'https://picsum.photos/seed/bugguard-blog3/400/300',
    date: '8 January 2020',
    category: 'Safety',
    title: 'Eco-Friendly Pest Control Methods',
    excerpt: 'Safe alternatives to harsh chemicals for your family and pets.',
  },
  {
    featured: false,
    image: 'https://picsum.photos/seed/bugguard-blog4/400/300',
    date: '5 January 2020',
    category: 'Guide',
    title: 'Signs You Need Professional Pest Control',
    excerpt: 'When DIY is not enough — red flags that signal it is time to call the experts.',
  },
] as const

export function LatestBlog() {
  const featured = posts[0]
  const others = posts.slice(1)

  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Latest Blog Post</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-mist">
          Stay updated with the latest pest control tips and industry news.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Featured post — spans 2 columns */}
          <article className="group overflow-hidden rounded-lg bg-paper md:col-span-2">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-64 w-full object-cover transition-transform group-hover:scale-105 md:h-80"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-mist">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{featured.date}</span>
                <span>/ {featured.category}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-ink">
                <a href="#blog" className="hover:text-brand">
                  {featured.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-mist">{featured.excerpt}</p>
            </div>
          </article>

          {/* Smaller posts — stacked */}
          <div className="flex flex-col gap-4">
            {others.map((post) => (
              <article
                key={post.title}
                className="group flex gap-4 overflow-hidden rounded-lg bg-paper p-3"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-20 w-20 shrink-0 rounded object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 text-xs text-mist">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <span>{post.date}</span>
                    <span>/ {post.category}</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-ink">
                    <a href="#blog" className="hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

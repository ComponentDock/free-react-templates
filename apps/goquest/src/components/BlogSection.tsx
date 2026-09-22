import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  image: string
  date: string
  category: string
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Exploring Hidden Gems in Southeast Asia',
    image: 'https://picsum.photos/seed/goquest-blog1/600/400',
    date: '15',
    category: 'Traveling',
  },
  {
    id: 2,
    title: 'Top 10 Adventure Destinations for 2025',
    image: 'https://picsum.photos/seed/goquest-blog2/600/400',
    date: '22',
    category: 'Traveling',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-accent-warm text-xl font-semibold uppercase tracking-wider">
            Our Recent news
          </h2>
          <h3 className="font-heading text-heading text-4xl font-bold mt-2">Tourist Blog</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-card-border"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-brand text-white w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs leading-none">{post.date}</span>
                  <span className="text-[10px] leading-none">Oct</span>
                </div>
                {/* Category tag */}
                <div className="absolute bottom-4 left-4 bg-accent-yellow text-heading text-xs font-semibold px-3 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-xl font-semibold text-heading mb-3 hover:text-brand transition-colors cursor-pointer">
                  {post.title}
                </h4>
                <a
                  href="#blog-more"
                  className="inline-flex items-center gap-1 text-brand font-medium hover:text-brand-hover transition-colors"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@free-react-templates/ui'

const blogPosts = [
  {
    title: 'Top 10 Things To Do Near Cayo Hotel',
    image: 'cayo-blog-1',
    date: 'September 15, 2026',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Discover the best attractions, restaurants, and hidden gems within walking distance of Cayo Hotel.',
  },
  {
    title: 'A Guide to Local Cuisine in the Caribbean',
    image: 'cayo-blog-2',
    date: 'September 10, 2026',
    author: 'Admin',
    comments: 5,
    excerpt:
      'Explore the rich flavors and culinary traditions of the Caribbean through our curated food guide.',
  },
  {
    title: 'Seasonal Events at Cayo Hotel',
    image: 'cayo-blog-3',
    date: 'September 5, 2026',
    author: 'Admin',
    comments: 2,
    excerpt:
      'From live music nights to themed dinner events, see what we have planned for this season.',
  },
]

export function Blog({ className }: { className?: string }) {
  return (
    <section id="blog" className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Latest News
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Our Blog
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="group overflow-hidden bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.image}/400/250`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-mist">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#"
                  className="font-heading text-sm font-semibold uppercase tracking-[2px] text-accent transition hover:text-accent/80"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

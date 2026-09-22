import { cn } from '@free-react-templates/ui'

const blogPosts = [
  {
    title: 'Top 10 Things To Do Near Hibiscus Hotel',
    image: 'hibiscus-blog-1',
    date: 'September 15, 2026',
  },
  {
    title: 'A Guide to Local Cuisine in New York',
    image: 'hibiscus-blog-2',
    date: 'September 10, 2026',
  },
  {
    title: 'Seasonal Events at Hibiscus Hotel',
    image: 'hibiscus-blog-3',
    date: 'September 5, 2026',
  },
  {
    title: 'Travel Tips for First-Time Visitors',
    image: 'hibiscus-blog-4',
    date: 'September 1, 2026',
  },
]

export function Blog({ className }: { className?: string }) {
  return (
    <section id="blog" className={cn('py-24', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Latest Blog
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Our Blog
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div key={post.title} className="group">
              <div className="relative mb-4 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.image}/400/250`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mb-2 text-xs text-mist">{post.date}</p>
              <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-ink">
                {post.title}
              </h3>
              <a
                href="#"
                className="font-heading text-sm font-semibold uppercase tracking-[2px] text-brand transition hover:text-brand/80"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

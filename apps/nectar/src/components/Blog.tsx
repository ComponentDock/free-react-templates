import { Button } from '@free-react-templates/ui'

const posts = [
  {
    seed: 'nectar-blog-1',
    date: { day: '15', month: 'Jan', year: '2026' },
    title: 'Modern Construction Trends to Watch',
    excerpt: 'Discover the latest innovations shaping the construction industry in 2026.',
    author: 'Admin',
    comments: 5,
  },
  {
    seed: 'nectar-blog-2',
    date: { day: '22', month: 'Feb', year: '2026' },
    title: 'Tips for Home Renovation Success',
    excerpt: 'Essential tips and tricks to ensure your home renovation project runs smoothly.',
    author: 'Editor',
    comments: 12,
  },
  {
    seed: 'nectar-blog-3',
    date: { day: '10', month: 'Mar', year: '2026' },
    title: 'Sustainable Building Materials Guide',
    excerpt: 'A comprehensive guide to eco-friendly materials for your next construction project.',
    author: 'Admin',
    comments: 8,
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading md:text-4xl">
          Recent Blog
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="overflow-hidden rounded-sm border border-muted bg-paper transition-shadow hover:shadow-lg"
            >
              {/* Image + date badge */}
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-52 w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex flex-col items-center bg-brand px-3 py-1">
                  <span className="text-xs font-bold leading-none text-heading">
                    {post.date.day}
                  </span>
                  <span className="text-[10px] uppercase leading-tight text-heading">
                    {post.date.month}
                  </span>
                  <span className="text-[10px] leading-tight text-heading">{post.date.year}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-heading">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <Button
                  className="mt-4 bg-brand px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </Button>
                <div className="mt-4 flex items-center gap-4 border-t border-muted pt-3 text-xs text-body">
                  <span>By {post.author}</span>
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

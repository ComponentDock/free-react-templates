import { MessageCircle } from 'lucide-react'

const posts = [
  {
    seed: 'edifica-blog-1',
    date: 'January 30, 2024',
    author: 'Admin',
    comments: 3,
    title: 'Modern Construction Trends Shaping the Industry in 2024',
  },
  {
    seed: 'edifica-blog-2',
    date: 'February 15, 2024',
    author: 'Admin',
    comments: 5,
    title: 'Sustainable Building Materials for Eco-Friendly Homes',
  },
  {
    seed: 'edifica-blog-3',
    date: 'March 02, 2024',
    author: 'Admin',
    comments: 2,
    title: 'Why Professional Architecture Design Matters for Your Project',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary-400">
            Our Blog
          </span>
          <h2 id="blog-heading" className="text-3xl font-bold text-ink">
            Recent Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.seed} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <div className="mb-3 flex items-center justify-center gap-4 text-xs text-smoke">
                  <span>{p.date}</span>
                  <span>{p.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    {p.comments}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

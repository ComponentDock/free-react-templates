import { CalendarDays } from 'lucide-react'

const posts = [
  {
    title: 'Smart City Construction',
    date: 'Jan 12, 2026',
    tag: 'Construction',
    alt: 'Crane over a smart city construction site',
  },
  {
    title: 'Green Building Materials',
    date: 'Jan 08, 2026',
    tag: 'Materials',
    alt: 'Eco-friendly building materials stacked on site',
  },
  {
    title: 'Safe Site Operations',
    date: 'Dec 30, 2025',
    tag: 'Safety',
    alt: 'Worker in a safety vest on a building site',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Blog</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Latest From Blog
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-[5px] border border-black/5 bg-paper dark:border-white/10 dark:bg-gray-900"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/edifice-blog-${index + 1}/700/420`}
                  alt={post.alt}
                  className="aspect-[5/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{post.tag}</p>
                <h3 className="mt-2 font-display text-lg font-bold uppercase text-ink transition-colors group-hover:text-brand dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-mist dark:text-gray-400">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

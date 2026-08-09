import { CalendarDays, User } from 'lucide-react'

const posts = [
  {
    title: "Tips From Makeup Artists You've Never Heard",
    author: 'Rosie Chapman',
    date: 'Jun 15, 2020',
    seed: 'gloss-blog-1',
  },
  {
    title: 'Everything I Learned From A Professional Makeup Artist',
    author: 'Rosie Chapman',
    date: 'Jun 15, 2020',
    seed: 'gloss-blog-2',
  },
  {
    title: '10 Makeup-Artist Tips That Surprised (and Delighted) Us',
    author: 'Rosie Chapman',
    date: 'Jun 15, 2020',
    seed: 'gloss-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            From the blog
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl dark:text-white">
            Makeup artist tips
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt={post.title}
                className="aspect-[8/5] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

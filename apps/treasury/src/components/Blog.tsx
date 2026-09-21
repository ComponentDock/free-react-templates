import { Calendar } from 'lucide-react'

const posts = [
  {
    title: 'A Basic Guide to Starting a Franchise in the Philippines',
    date: 'May 1, 2026',
    excerpt:
      'Learn the essential steps to launching a successful franchise business, from market research to operations setup.',
    seed: 'blog-1',
  },
  {
    title: 'Smart Investment Strategies for Small Businesses',
    date: 'Apr 22, 2026',
    excerpt:
      'Discover how to make your money work harder with these proven investment approaches for growing companies.',
    seed: 'blog-2',
  },
  {
    title: 'Understanding Modern Banking Solutions',
    date: 'Apr 15, 2026',
    excerpt:
      'A comprehensive look at the latest digital banking tools and how they can benefit your financial operations.',
    seed: 'blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Our Blog</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map(({ title, date, excerpt, seed }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-colors dark:border-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/600/400`}
                alt={title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {date}
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink dark:text-white">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

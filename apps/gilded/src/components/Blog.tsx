import { CalendarDays, User } from 'lucide-react'

const posts = [
  {
    title: '5 Hair Trends That Will Define This Season',
    date: 'January 15, 2031',
    img: 'https://picsum.photos/seed/gilded-post1/600/400',
  },
  {
    title: 'The Art of Balayage: What to Expect',
    date: 'January 08, 2031',
    img: 'https://picsum.photos/seed/gilded-post2/600/400',
  },
  {
    title: 'Winter Hair Care: Keep Your Color Vibrant',
    date: 'December 20, 2030',
    img: 'https://picsum.photos/seed/gilded-post3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            From the journal
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Latest News</h2>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Tips, trends, and stories straight from the salon floor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-colors hover:border-brand/40 dark:border-gray-800"
            >
              <img src={post.img} alt="" aria-hidden="true" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">{post.title}</h3>
                <ul className="mt-3 flex items-center gap-4 text-xs text-mist dark:text-gray-400">
                  <li className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    Gilded Salon
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.date}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

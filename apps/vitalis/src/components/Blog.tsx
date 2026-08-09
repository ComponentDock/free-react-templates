import { CalendarDays, User } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    title: "Here's how you can get a natural glow this party season",
    author: 'John Doe',
    date: 'Dec 06, 2030',
    img: 'https://picsum.photos/seed/vitalis-post1/600/400',
  },
  {
    title: 'Get better skin with these top 10 tips for skin care',
    author: 'John Doe',
    date: 'Dec 06, 2030',
    img: 'https://picsum.photos/seed/vitalis-post2/600/400',
  },
  {
    title: '8 Ways to Save Your Skin if You Exercise Outside This Winter',
    author: 'John Doe',
    date: 'Dec 06, 2030',
    img: 'https://picsum.photos/seed/vitalis-post3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            From the blog
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Skin care tips</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-colors hover:border-brand/40 dark:border-gray-800"
            >
              <img src={post.img} alt="" aria-hidden="true" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
                <ul className="mt-3 flex items-center gap-4 text-xs text-mist dark:text-gray-400">
                  <li className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.author}
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

        <div className="mt-10 text-center">
          <ButtonLink
            href="#blog"
            className="rounded border-2 border-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-white dark:text-white"
          >
            View all news
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

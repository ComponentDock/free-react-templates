import { Calendar, MessageSquare, User } from 'lucide-react'

const posts = [
  {
    date: 'Jan. 20, 2019',
    author: 'Admin',
    comments: '3',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
  {
    date: 'Jan. 20, 2019',
    author: 'Admin',
    comments: '3',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
  {
    date: 'Jan. 20, 2019',
    author: 'Admin',
    comments: '3',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
] as const

export function Blog() {
  return (
    <section
      id="blog"
      aria-label="Recent blog"
      className="bg-paper py-20 dark:bg-gray-900 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Recent Blog
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={`${post.title}-${i}`}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/tessera-blog-${i + 1}/600/400`}
                alt=""
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <ul className="flex items-center gap-4 text-xs text-mist dark:text-white/60">
                  <li className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.author}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.comments}
                  </li>
                </ul>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink dark:text-white">
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

import { Calendar, MessageCircle, User } from 'lucide-react'

const posts = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-wide text-ink dark:text-white">
          Recent Blog
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index}>
              <img
                src={`https://picsum.photos/seed/couture-${index + 20}/600/400`}
                alt={post.title}
                className="h-56 w-full object-cover"
              />
              <h3 className="mt-4 font-display text-base leading-snug text-ink dark:text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex items-center gap-4 text-xs uppercase tracking-widest text-mist">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.comments}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

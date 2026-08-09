import { CalendarDays, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Portable Fashion for Women',
    date: '13th Dec',
    comments: 15,
    likes: 4,
    seed: 'dapper-blog-1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'The Art of a Clean Shave',
    date: '13th Dec',
    comments: 15,
    likes: 4,
    seed: 'dapper-blog-2',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Beard Care Essentials',
    date: '13th Dec',
    comments: 15,
    likes: 4,
    seed: 'dapper-blog-3',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Classic Cuts That Never Fade',
    date: '13th Dec',
    comments: 15,
    likes: 4,
    seed: 'dapper-blog-4',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Latest From Blog
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/500`}
                alt=""
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-wide text-brand-light">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    {String(post.likes).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

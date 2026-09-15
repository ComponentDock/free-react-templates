import { Calendar, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: '16 Easy Ideas to Use Everyday Stuff in Kitchen',
    date: 'October 27, 2024',
    author: 'Admin',
    likes: 30,
    comments: 4,
    image: 'https://picsum.photos/seed/cosyhaus-blog1/800/500',
  },
  {
    title: '10 Simple Ways to Refresh Your Living Space',
    date: 'November 3, 2024',
    author: 'Admin',
    likes: 45,
    comments: 6,
    image: 'https://picsum.photos/seed/cosyhaus-blog2/800/500',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-display text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Our Latest Blog
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink dark:text-white">
            Our Recent News
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-mist">
                <span className="inline-flex items-center gap-1.5 rounded bg-brand px-3 py-1 text-white">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">By {post.author}</span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3 w-3" aria-hidden="true" />
                  {post.likes} Likes
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  {post.comments} Comments
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-ink dark:text-white">
                <a href="#" className="hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

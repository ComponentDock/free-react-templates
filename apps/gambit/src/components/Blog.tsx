import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Latest Blog Posts recreated from the source's blog_area: three cards each
   with an image, a title link, a #ddd excerpt, and a meta row of calendar
   date, heart count, and comment count (13px, #ddd). */

export function Blog() {
  return (
    <section id="blog" className="bg-white pb-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-20 text-center">
          <h2
            aria-hidden="true"
            className="font-display text-7xl font-bold leading-[60px] text-brand opacity-10"
          >
            Latest Blog Posts
          </h2>
          <h2 className="font-display -mt-10 text-4xl font-bold text-ink dark:text-white">
            Latest Blog Posts
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt=""
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pt-6">
                <a
                  href="#blog"
                  className="font-display text-xl font-semibold text-ink transition-colors hover:text-purple-ink dark:text-white dark:hover:text-brand-2"
                >
                  {post.title}
                </a>
                <p className="mt-5 pb-10 leading-relaxed text-gray-400 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 border-t border-gray-200 pt-4 text-[13px] text-gray-400 dark:border-gray-800">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {post.hearts}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

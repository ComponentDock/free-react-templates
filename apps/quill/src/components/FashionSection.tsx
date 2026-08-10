import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { fashionMorePosts, fashionPosts } from '../data'

export function FashionSection() {
  const [visibleCount, setVisibleCount] = useState(fashionPosts.length)
  const allPosts = [...fashionPosts, ...fashionMorePosts]
  const posts = allPosts.slice(0, visibleCount)
  const hasMore = visibleCount < allPosts.length

  return (
    <section id="fashion" className="bg-white py-30 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-sans text-3xl font-semibold text-ink dark:text-white">
            Fashion News This Week
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-black px-2.5 py-1 text-xs font-medium text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-sans text-base leading-snug font-semibold text-ink transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted dark:text-gray-400">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {post.comments} Comments
                </p>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(allPosts.length)}
              className="rounded-full border border-gray-300 px-10 py-3 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:border-brand hover:text-brand dark:border-gray-600 dark:text-gray-300 dark:hover:border-brand dark:hover:text-brand"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

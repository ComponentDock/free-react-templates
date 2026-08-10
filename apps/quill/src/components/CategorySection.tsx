import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { categoryPosts } from '../data'

export function CategorySection() {
  const [offset, setOffset] = useState(0)
  const count = categoryPosts.length
  const cards = categoryPosts.map((_, index) => categoryPosts[(index + offset) % count]!)

  const rotate = (direction: 1 | -1) =>
    setOffset((current) => (current + direction + count) % count)

  return (
    <section id="news" className="bg-white py-30 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-sans text-3xl font-semibold text-ink dark:text-white">
            Latest News from all categories
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/800/600`}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-black px-2.5 py-1 text-xs font-medium text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-semibold text-ink transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-brand">
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

        <div className="mt-10 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous category"
            onClick={() => rotate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-muted transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next category"
            onClick={() => rotate(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-muted transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

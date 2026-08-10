import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { blogPosts } from '../data'

const pages = [1, 2, 3] as const

export function BlogSection() {
  return (
    <section aria-labelledby="lifestyle-heading" className="bg-white pb-14 dark:bg-gray-950">
      <h2
        id="lifestyle-heading"
        className="mb-4 font-sans text-2xl font-bold text-ink dark:text-white"
      >
        Lifestyle Category
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.seed}>
            <a href="#home" className="group block transition-opacity hover:opacity-70">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt=""
                className="h-[220px] w-full object-cover"
              />
              <div className="border border-t-0 border-cardline bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-meta dark:text-gray-400">
                  <span className="rounded bg-brand px-2 py-0.5 text-xs font-medium uppercase text-white">
                    {post.category}
                  </span>
                  {post.date}
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {post.comments}
                  </span>
                </p>
                <h3 className="font-sans text-lg leading-snug text-ink dark:text-gray-100">
                  {post.title}
                </h3>
              </div>
            </a>
          </article>
        ))}
      </div>

      <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-200"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={page === 1 ? 'page' : undefined}
            className={cn(
              'flex h-[60px] w-[60px] items-center justify-center rounded-full text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-200',
              page === 1 &&
                'bg-brand text-white hover:bg-brand hover:text-white dark:bg-brand dark:text-white',
            )}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next page"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-200"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </section>
  )
}

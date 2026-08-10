import { MessageCircle } from 'lucide-react'
import { morePosts } from '../data'

export function MorePosts() {
  return (
    <section aria-labelledby="more-heading" className="bg-white pb-16 dark:bg-gray-950">
      <h2
        id="more-heading"
        className="mb-4 mt-12 font-sans text-2xl font-bold text-ink dark:text-white"
      >
        More Blog Posts
      </h2>
      <div className="flex flex-col gap-5">
        {morePosts.map((post) => (
          <a
            key={post.seed}
            href="#home"
            className="group flex overflow-hidden border border-line transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,.1)] dark:border-gray-700"
          >
            <img
              src={`https://picsum.photos/seed/${post.seed}/200/200`}
              alt=""
              className="h-[200px] w-[200px] shrink-0 object-cover"
            />
            <span className="flex flex-col justify-center gap-2 p-8">
              <span className="flex flex-wrap items-center gap-2 text-[13px] text-meta dark:text-gray-400">
                <span className="rounded bg-brand px-2 py-0.5 text-xs font-medium uppercase text-white">
                  {post.category}
                </span>
                {post.date}
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {post.comments}
                </span>
              </span>
              <span className="font-sans text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand dark:text-gray-100">
                {post.title}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

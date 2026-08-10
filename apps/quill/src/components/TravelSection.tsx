import { MessageCircle } from 'lucide-react'
import { travelPosts } from '../data'

export function TravelSection() {
  return (
    <section id="travel" className="bg-soft py-30 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-sans text-3xl font-semibold text-ink dark:text-white">
            Hot topics from Travel Section
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {travelPosts.map((post) => (
            <article key={post.seed} className="flex flex-col gap-5 sm:flex-row">
              <div className="relative shrink-0">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-44 w-full object-cover sm:w-64"
                />
                <div className="absolute top-3 left-3 bg-ink px-3 py-2 text-center text-white">
                  <span className="block text-xl leading-none font-semibold">{post.day}</span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wide">
                    {post.month}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-sans text-lg leading-snug font-semibold text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand">
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
      </div>
    </section>
  )
}

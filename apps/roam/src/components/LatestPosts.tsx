import { Calendar, MessageCircle } from 'lucide-react'
import { imgUrl, latestPosts, loadMoreLabel, readMoreLabel } from '../data'

export function LatestPosts() {
  return (
    <section aria-label="Latest blog posts" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-[50px] max-w-[510px] font-display text-5xl leading-tight font-bold text-ink">
          Latest Blog Posts.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <article key={post.seed} className="group relative overflow-hidden bg-ink">
              <img
                src={imgUrl(post.seed, 600, 450)}
                alt=""
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-xl font-bold">
                  <a
                    href="#"
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {post.title}
                  </a>
                </h3>
                <div className="mt-3 flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-3 inline-block text-[15px] font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {readMoreLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href="#"
            className="text-[15px] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {loadMoreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

import { Calendar, MessageCircle } from 'lucide-react'
import { imgUrl, popularPosts } from '../data'

export function PopularPosts() {
  return (
    <section aria-label="Popular posts" className="bg-white pb-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-[50px] max-w-[510px] font-display text-5xl leading-tight font-bold text-ink">
          Popular Posts to Remember
        </h2>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {popularPosts.map((post) => (
            <article
              key={post.seed}
              className="flex items-center gap-5 bg-footer p-5 transition-colors hover:bg-section"
            >
              <img
                src={imgUrl(post.seed, 160, 160)}
                alt=""
                className="h-20 w-20 shrink-0 object-cover"
              />
              <div className="min-w-0">
                <h3 className="font-display text-lg leading-snug font-bold text-ink">
                  <a
                    href="#"
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {post.title}
                  </a>
                </h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-azure" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
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

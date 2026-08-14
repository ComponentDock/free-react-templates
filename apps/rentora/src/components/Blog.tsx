import { Clock, Heart, MessageCircle } from 'lucide-react'
import { BLOG } from '../data'

/* Blog (source: div.blog_part — "Read Latest News From Our Blog" with four
   posts: two image cards and two media rows, each with a time/comment/heart
   meta line). */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white pb-[125px] pt-[130px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <h2 className="relative mb-16 pb-4 text-center text-[40px] font-bold leading-[1.25] text-ink">
          {BLOG.heading}
          <span
            className="absolute bottom-0 left-1/2 h-[2px] w-[90px] -translate-x-1/2 bg-brand"
            aria-hidden="true"
          />
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {BLOG.posts.map((post) =>
            post.media ? (
              <article key={post.title} className="flex items-center gap-5">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/200/160`}
                  alt=""
                  className="h-[140px] w-[200px] shrink-0 object-cover"
                />
                <div>
                  <p className="flex flex-wrap items-center gap-3 text-[13px] text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                      {post.meta}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-brand" aria-hidden="true" />
                      {post.likes}
                    </span>
                  </p>
                  <h3 className="mt-3 text-[19px] font-semibold leading-snug text-ink">
                    <a href="#blog" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ) : (
              <article key={post.title}>
                <img
                  src={`https://picsum.photos/seed/${post.seed}/540/360`}
                  alt=""
                  className="h-[260px] w-full object-cover"
                />
                <p className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.meta}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.likes}
                  </span>
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-snug text-ink">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{post.excerpt}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

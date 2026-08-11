import { CalendarDays, MessageSquare } from 'lucide-react'
import { BLOG_CAPTION, BLOG_POSTS, BLOG_READ_MORE, BLOG_TITLE } from '../data'
import { SectionTitle } from './SectionTitle'

/* .blog_part — centered "Blog Post" title + 3 cards: photo, H4 title,
   meta (calendar + comments), read-more link. Cards bg #fafafa, radius
   50px 0 50px 0. */
export function BlogSection() {
  return (
    <section id="blog" className="bg-white px-4 pt-[70px] pb-[140px] max-[991px]:pb-[70px]">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={BLOG_TITLE} caption={BLOG_CAPTION} centered />

        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.seed}
              className="overflow-hidden rounded-[50px_0_50px_0] bg-mist transition-transform hover:-translate-y-1"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt=""
                className="w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-[22px] font-semibold leading-[1.4] text-ink">{post.title}</h3>
                <p className="mt-4 flex items-center gap-4 text-[14px] text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays aria-hidden="true" className="h-4 w-4 text-brand" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare aria-hidden="true" className="h-4 w-4 text-brand" />
                    {post.comments}
                  </span>
                </p>
                <a
                  href="#single-blog"
                  className="mt-6 inline-block text-[15px] font-bold text-brand uppercase transition-colors hover:text-brand-pink"
                >
                  {BLOG_READ_MORE}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

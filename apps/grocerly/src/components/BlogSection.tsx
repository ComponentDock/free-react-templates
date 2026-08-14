import { Calendar, MessageSquare } from 'lucide-react'
import { blogPosts } from '../data'
import { SectionTitle } from './SectionTitle'

/** "From The Blog" — three post cards (photo, date/comment chip, title,
 *  excerpt). */
export function BlogSection() {
  return (
    <section aria-label="From the blog" className="bg-white pb-10">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle>From The Blog</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <div className="relative h-[270px] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex items-center gap-3 bg-white px-3 py-1.5 text-xs font-bold text-ink">
                  <span className="flex items-center gap-1">
                    <Calendar aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
                    {post.comments}
                  </span>
                </div>
              </div>
              <div className="pt-5">
                <h5 className="text-lg font-bold text-ink">
                  <a
                    href="#blog"
                    onClick={(event) => event.preventDefault()}
                    className="hover:text-brand"
                  >
                    {post.title}
                  </a>
                </h5>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

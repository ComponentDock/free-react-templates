import { BLOG_HEADING, BLOG_LEAD, BLOG_LINK, BLOG_POSTS } from '../data'
import { MoreLink } from './MoreLink'

/* div.site-section — "Blog and Updates": heading + subtext, then a 4-column
   grid of .post-entry-1 cards — photo (green #207561 overlay on hover),
   date, uppercase title and a "Continue Reading" arrow link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-[20px] leading-snug font-bold text-ink uppercase">{BLOG_HEADING}</h2>
          <p className="mt-4 leading-relaxed text-ink/70">{BLOG_LEAD}</p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group">
              <a href="#blog" className="relative block overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-40"
                  aria-hidden="true"
                />
              </a>
              <div className="bg-white p-5">
                <p className="text-[13px] text-faint">{post.date}</p>
                <h3 className="mt-2 text-[16px] leading-snug font-bold text-ink uppercase">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <MoreLink href="#blog" className="mt-4">
                  {BLOG_LINK}
                </MoreLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

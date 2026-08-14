import { BLOG_POSTS } from '../data'

/* Blog posts (source: div.site-section.bg-light — #f6f5f5 section with
   three post cards: thumbnail, white content box with an uppercase 13px
   meta line, 22px title link (hover → green), and an excerpt). */
export function Blog() {
  return (
    <section id="blog" className="bg-soft py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-[2px] w-[70px] bg-brand" aria-hidden="true" />
          <h2 className="text-[22px] font-semibold uppercase text-ink">Blog Posts</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-600">
            News, guides, and market updates from the Roost team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.seed} className="bg-white">
              <a href="#blog">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt=""
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
              </a>
              <div className="p-5">
                <p className="text-[13px] uppercase tracking-[0.1em] text-meta">{post.meta}</p>
                <h3 className="mt-3 text-[22px] leading-snug">
                  <a href="#blog" className="text-ink transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

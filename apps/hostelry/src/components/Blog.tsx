import { BLOG_POSTS } from '../data'

/* Blog (source: section.latest_blog_area.section_gap — "latest posts from
   blog" heading with 3 cards: thumbnail with hover zoom-rotate, date, tag,
   dark title (hover light blue) and excerpt). */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-[45px] text-ink">
            latest posts from blog
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-[1.23]"
                />
              </div>
              <div className="pt-[30px]">
                <p className="text-[14px] leading-[24px] text-smoke">{post.date}</p>
                <p className="mt-1 text-[14px] leading-[24px]">
                  <a href="#blog" className="transition-colors hover:text-sky">
                    {post.tag}
                  </a>
                </p>
                <h3 className="mt-3 text-[18px] font-semibold leading-[24px] text-ink">
                  <a href="#blog" className="transition-colors hover:text-sky">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-[14px] leading-[24px] text-smoke">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

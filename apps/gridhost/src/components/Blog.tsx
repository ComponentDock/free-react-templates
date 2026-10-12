import { POSTS } from '../lib/site'
import { SectionTitle } from './SectionTitle'

/**
 * The blog band: three cards whose `surface-pink` captions hang off the photo's
 * bottom-right corner (94% wide, top-right 7px radius, `padding:29px 20px 20px
 * 31px`), each pairing a 14px uppercase date with a bold navy title that hovers
 * brand pink. Titles render at a legible 18px rather than the source cascade's
 * 13.6px.
 */
export function Blog() {
  return (
    <section
      id="blog"
      aria-label="From the blog"
      className="pt-[65px] pb-[10px] min-[768px]:pt-[100px] min-[768px]:pb-[40px] min-[992px]:pt-[150px] min-[992px]:pb-[90px] min-[1200px]:pt-[195px] min-[1200px]:pb-[100px]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-[15px]">
        <SectionTitle eyebrow="Our blog" title="Our latest news" className="mb-[80px]" />

        <div className="flex flex-wrap">
          {POSTS.map((post) => (
            <article key={post.title} className="mb-[100px] w-full px-[15px] pb-[63px] md:w-1/2 lg:w-1/3">
              <div className="relative">
                <img
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                  className="h-[220px] w-full rounded-photo object-cover"
                />
                <div className="absolute right-0 bottom-[-63px] w-[94%] rounded-tr-notch bg-surface-pink px-[20px] pt-[29px] pb-[20px] pl-[31px]">
                  <span className="block font-body text-[14px] font-semibold tracking-[0.04em] text-muted uppercase">
                    {post.date}
                  </span>
                  <h4 className="font-body text-[18px] leading-[1.4] font-bold">
                    <a
                      href={post.href}
                      className="text-navy-heading transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {post.title}
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

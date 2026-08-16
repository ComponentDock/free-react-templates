import { blog } from '../data'

/**
 * Blog section: "Our Blogs" heading with a gold "More Blog" button on the
 * same row, followed by two post rows (photo left, caption right — both
 * rows share this order in the reference DOM; the mr/ml classes in the
 * source are margins, not flips).
 */
export function Blog() {
  return (
    <section id="blog" className="bg-ink pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mb-[90px] flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-[40px] leading-[1.3] text-heading">{blog.heading}</h2>
          <a
            href="#blog"
            className="inline-block border border-heading-light bg-brand px-[41px] py-[22px] text-[15px] font-normal tracking-wide text-ink uppercase transition-colors hover:border-brand hover:bg-transparent hover:text-brand"
          >
            {blog.moreLabel}
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {blog.posts.map((post) => (
            <article key={post.title} className="grid grid-cols-1 items-stretch md:grid-cols-2">
              <div>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10">
                <h3 className="font-display text-[24px] leading-[1.3] text-heading">
                  {post.title}
                </h3>
                <p className="mt-[20px] text-[16px] leading-[1.6] text-heading">{post.paragraph}</p>
                <a
                  href="#blog"
                  className="relative mt-[30px] inline-block self-start text-[14px] font-light tracking-wide text-brand uppercase transition-all after:absolute after:-bottom-[11px] after:left-0 after:h-[2px] after:w-full after:bg-brand hover:tracking-[1px]"
                >
                  {post.learnLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { blog } from '../data'

/** Blog section (source: section.blogs-area, bg #0e0e0e): centered "Tourist
 *  Blog / Our Recent Photos" title, then three cards whose photo carries an
 *  ink overlay panel (bottom-right, 94% wide) with the date and title. */
export function Blog() {
  return (
    <section id="blog" className="bg-coal pb-10 pt-[65px] lg:pt-[195px]">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-[30px]">
        <div className="mb-[70px] text-center">
          <h2 className="mb-[17px] font-heading text-[31px] font-semibold uppercase leading-[1.3] text-white lg:text-[50px]">
            {blog.title}
          </h2>
          <p className="text-white">{blog.subtitle}</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
          {blog.posts.map((post, index) => (
            <article key={`${post.title}-${index}`} className="relative">
              <img src={post.image} alt="" className="w-full object-cover" loading="lazy" />
              <div className="absolute -bottom-[63px] right-0 w-[94%] bg-ink p-[29px_20px_20px_31px]">
                <span className="mb-[15px] block text-sm uppercase leading-none text-blogdate">
                  {post.date}
                </span>
                <h3 className="font-heading text-[20px] font-medium text-white">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

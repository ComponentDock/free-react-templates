import { blog } from '../data'

/** White "Our News From Blog" grid: three cards with a zooming image,
 *  category + date, 24px title and a blue-on-hover Read more link. */
export function Blog() {
  return (
    <section id="blog-section" className="bg-white py-24 md:py-[110px]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="inline-flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
            {blog.kicker}
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
            {blog.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blog.posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-t-[5px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-[#fcfcfc] px-[22px] pb-[31px] pt-[34px] lg:pl-[37px]">
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-[#5191ff]">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#5191ff]" aria-hidden="true" />
                  <p className="text-[14px] text-[#aebccb]">{post.date}</p>
                </div>
                <h4 className="mt-4 text-[24px] font-extrabold leading-[1.4] text-[#112957]">
                  {post.title}
                </h4>
                <a
                  href="#blog-section"
                  className="mt-4 inline-block text-[16px] font-medium text-[#c4c4c4] transition-colors hover:text-brand"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

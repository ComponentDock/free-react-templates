import { BLOG_POSTS } from '../data'

/* Our Latest Blog (source: div.our_latest_blog — three cards: thumb image,
   date + category meta row, bold title, paragraph). */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-16 text-center">
          <h2 className="text-[46px] font-normal text-ink">Our Latest Blog</h2>
          <p className="mx-auto mt-4 max-w-[560px] font-serif text-[17px] text-smoke">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="h-[250px] w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[14px] text-smoke">
                  {post.date} <span className="text-brand">{post.category}</span>
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-7 text-ink">{post.title}</h3>
                <p className="mt-3 font-serif text-[16px] leading-6 text-smoke">{post.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

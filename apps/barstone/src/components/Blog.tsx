import { Heart, MessageCircle } from 'lucide-react'
import { blog } from '../data'

/** White blog band: three cards separated by 10px white gutters, with a 90% white hover wash. */
export function Blog() {
  return (
    <section id="blog" className="bg-white px-4 py-[70px] md:py-[80px] xl:py-[130px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-[81px] max-w-[620px] text-center">
          <h2 className="mb-[27px] text-[26px] leading-[1.25] font-bold text-ink xl:text-[36px]">
            {blog.heading}
          </h2>
          <p className="text-[15px] text-muted">{blog.intro}</p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-3">
          {blog.posts.map((post) => (
            <article
              key={post.title}
              className="border-b-[10px] border-white sm:border-r-[10px] xl:border-b-0"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  width={720}
                  height={480}
                  loading="lazy"
                  className="h-[240px] w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 px-[30px] text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="text-[15px] text-gold">{post.category}</span>
                  <span className="mt-2 font-serif text-[18px] text-ink xl:text-[22px]">
                    {post.title}
                  </span>
                </div>
              </div>

              <div className="pt-[30px]">
                <p className="flex items-center gap-4 text-[14px]">
                  <a href="#blog" className="text-gold">
                    {post.category}
                  </a>
                  <span className="text-muted">{post.date}</span>
                </p>
                <h3 className="mt-[30px] mb-5 text-[18px] font-medium text-ink xl:text-[22px]">
                  <a href="#blog" className="transition-colors hover:text-gold">
                    {post.title}
                  </a>
                </h3>
                <p className="text-[15px] leading-[1.8] text-muted">{post.excerpt}</p>
                <ul className="mt-5 flex items-center gap-6 text-[14px] text-muted">
                  <li className="flex items-center gap-2">
                    <Heart aria-hidden="true" className="size-4 text-gold" />
                    {post.likes} Like
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle aria-hidden="true" className="size-4 text-gold" />
                    {post.comments} Comments
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

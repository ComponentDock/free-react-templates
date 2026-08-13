import { cn } from '@free-react-templates/ui'
import { blog } from '../data'

/** Blog area (reference `.home-blog-area`): three post cards with an image,
 *  a 1px-bordered box holding the uppercase title, excerpt, and a date |
 *  comments meta row; the third card renders its content over a dark image
 *  overlay with a white headline. */
export function Blog() {
  return (
    <section id={blog.id} aria-label="Blog" className="pt-[100px] pb-[120px] lg:pt-[150px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-normal tracking-[1px] text-brand uppercase">{blog.eyebrow}</p>
          <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-navy uppercase lg:text-[42px]">
            {blog.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post, index) => (
            <article key={index} className={cn(post.overlay && 'relative min-h-[440px]')}>
              {post.overlay ? (
                <>
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-navy/85" />
                  <div className="relative flex h-full flex-col justify-end px-[40px] py-[45px]">
                    <h4 className="font-heading text-[21px] font-normal text-white uppercase">
                      {post.title}
                    </h4>
                    <p className="mt-5 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 border-t border-white/20 pt-3 text-sm text-white/70">
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.date}
                      </a>
                      <span aria-hidden="true">|</span>
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.comments}
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img src={post.image} alt="" className="w-full object-cover" loading="lazy" />
                  <div className="border border-line px-[40px] py-[45px]">
                    <h4 className="font-heading text-[21px] font-normal text-ink uppercase">
                      {post.title}
                    </h4>
                    <p className="mt-5 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 border-t border-line pt-3 text-sm text-[rgba(143,143,143,0.7)]">
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.date}
                      </a>
                      <span aria-hidden="true">|</span>
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.comments}
                      </a>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

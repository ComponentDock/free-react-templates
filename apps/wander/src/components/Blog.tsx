import { blog } from '../data'

/* Reference: section.blog-post-entry.bg-light.slant-top — solid teal
   #65C0BA band whose top edge is crossed by a white diagonal strip
   (400px tall, 150% wide, rotate(-4deg), shifted fully above the section
   top; the section clips it with overflow:hidden). Centered 70px heading
   (black per the reference quirk) + translucent-white lead, then THREE
   white cards with a date meta line, a 26px title link and a hover
   shadow that deepens. */
export function Blog() {
  return (
    <section aria-label="Recent posts" className="relative overflow-hidden bg-brand py-28">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-[400px] w-[150%] bg-white [transform:rotate(-4deg)_translateX(-50%)_translateY(-100%)]"
      />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[48px] text-ink lg:text-[70px]">{blog.heading}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/70">{blog.lead}</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <article
              key={post.title}
              className="bg-white shadow-[0_2px_5px_-2px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={post.photo}
                alt={post.alt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="px-[30px] py-6">
                <span className="text-xs uppercase tracking-[0.1em] text-meta">{post.date}</span>
                <h2 className="mt-2 text-[26px] leading-snug">
                  <a href="#news" className="text-ink transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h2>
                <p className="mt-3">{post.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

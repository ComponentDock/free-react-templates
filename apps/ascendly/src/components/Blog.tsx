import { BLOG_POSTS } from '../data'

/* blog — "Blog" heading + right-aligned "View All" link, three post cards
   with the original's 2px indigo border, image, title, meta and excerpt. */
export function Blog() {
  return (
    <section id="blog-section" className="bg-white py-28 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-brand">Blog</h2>
          <a
            href="#blog-section"
            className="text-[14px] font-black tracking-wider text-brand uppercase hover:text-primary-800"
          >
            View All
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <article key={index} className="border-2 border-brand bg-white">
              <img src={post.image} alt="" loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-black text-ink dark:text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.meta}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

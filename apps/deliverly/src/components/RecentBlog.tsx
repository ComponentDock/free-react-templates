import { blogPosts, blogTitle } from '../data'

export function RecentBlog() {
  return (
    <section id="blog" aria-label="Latest blog posts" className="bg-light py-[70px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <div aria-hidden="true" className="mx-auto mb-4 h-[2px] w-[50px] bg-brand" />
          <h2 className="font-serif text-[40px] font-bold text-ink">{blogTitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[20px] rounded-bl-none bg-white p-5 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.05)]"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-black/50">
                {post.date}
              </span>
              <h3 className="mt-2 font-serif text-base font-bold leading-snug">
                <a href="#blog" className="text-black transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

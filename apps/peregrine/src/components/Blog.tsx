import { blogPosts, blogSectionTitle } from '../data'

export function Blog() {
  return (
    <section id="blog-section" className="bg-soft px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-ink">{blogSectionTitle}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative">
                <img src={post.image} alt="" className="h-56 w-full object-cover" />
                <div className="absolute -bottom-0 left-4 flex -translate-y-1/2 items-stretch">
                  <span className="flex h-[50px] w-[60px] items-center justify-center bg-white text-4xl font-light text-brand shadow-sm">
                    {post.day}
                  </span>
                  <div className="flex flex-col justify-center bg-panel px-3">
                    <span className="text-[13px] leading-tight text-white/80">{post.month}</span>
                    <span className="text-[13px] leading-tight text-white/80">{post.year}</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-black transition-colors group-hover:text-brand">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

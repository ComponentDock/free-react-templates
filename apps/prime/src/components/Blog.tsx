import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm text-brand">Read our blog</span>
          <h2 className="text-3xl font-normal text-ink">Latest Blog</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
              <a href="#blog" className="block">
                <img src={post.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="mb-2 text-sm text-muted">{post.meta}</p>
                  <h3 className="text-base leading-snug font-medium text-ink transition-colors hover:text-brand">
                    {post.title}
                  </h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

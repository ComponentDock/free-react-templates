import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Latest blog posts" className="scroll-mt-24 bg-mist pt-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[44px] font-normal leading-tight text-navy">Latest blog</h2>
          <p className="mt-4 text-lg text-body">Tips and news from the Pearly dental team.</p>
        </div>
        <div className="mt-16 bg-white pb-[120px]">
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="group">
                <img src={post.image} alt="" className="h-[220px] w-full object-cover" />
                <div className="pt-6">
                  <h4 className="text-lg font-medium leading-snug text-navy">{post.title}</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{post.excerpt}</p>
                  <a
                    href="#blog"
                    className="mt-4 inline-block border-b border-navy pb-0.5 text-base font-medium text-[#080808] transition-colors hover:text-mint"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

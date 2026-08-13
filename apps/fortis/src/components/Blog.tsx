import { blogPosts } from '../data'

/** Blog on the white background: three post cards, each with an image, a
 *  22px title link, a meta line (date · by author) and an excerpt. */
export function Blog() {
  return (
    <section id="journal" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="section-heading text-black">Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="h-full">
              <a href="#journal" className="block overflow-hidden rounded">
                <img src={post.image} alt="" className="w-full object-cover" loading="lazy" />
              </a>
              <div className="bg-white p-5">
                <h3 className="mb-2">
                  <a
                    href="#journal"
                    className="text-[22px] font-medium leading-snug text-black transition-colors hover:text-brand"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-sm text-[#ccc]">
                  {post.date} <span>by</span> {post.author}
                </p>
                <p className="text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

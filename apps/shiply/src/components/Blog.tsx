import { posts } from '../data'

/** "Our Blog" section: two horizontal post cards with photo, title, meta
 *  line, and excerpt. */
export function Blog() {
  return (
    <section id="blog" aria-label="Our Blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="text-4xl font-bold uppercase text-brand">Our Blog</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-20 bg-brand" />
          <p className="mt-4 text-body-grey">See Our Daily News & Updates</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {posts.map((post, i) => (
            <article key={i} className="flex flex-col">
              <img src={post.image} alt="" className="mb-8 h-64 w-full object-cover" />
              <h3 className="text-xl font-medium text-ink">
                <a href="#blog" className="hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <div className="mb-4 mt-1 text-sm text-muted">{post.meta}</div>
              <p className="text-body-grey">{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

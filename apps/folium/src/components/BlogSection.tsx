import { posts } from '../data'

/** Blog section on the #fafafa band: three image cards with a category
 *  label, a bold title and post meta; hovering slides a white panel up and
 *  turns the text black. */
export function BlogSection() {
  return (
    <section id="blog" aria-label="Our blog" className="bg-band py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-light text-black">Our Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={`${post.title}-${index}`}
              href="#blog"
              className="group relative block h-[500px] overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0"
                aria-hidden="true"
              />
              <span className="relative flex h-full flex-col justify-end p-6 text-white transition-colors duration-500 group-hover:text-black">
                <span className="text-xs uppercase tracking-[0.1em] opacity-60">
                  {post.category}
                </span>
                <span className="mt-2 block text-xl font-bold">{post.title}</span>
                <span className="mt-2 text-xs uppercase tracking-wide opacity-60">
                  {post.author} · {post.date}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { blogPosts } from '../data'

/** Blog section (reference `.section.blog`): centered heading + lead, then
 *  three media cards — thumbnail link, post-meta date, title, and a Read
 *  More link (excerpt on the first card only, as in the reference). */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-black text-black md:text-4xl">Blog Posts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex gap-6">
              <a href="#blog" className="block w-2/5 shrink-0">
                <img
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </a>
              <div>
                <span className="text-xs font-normal tracking-[0.2em] text-[#b3b3b3] uppercase">
                  {post.date}
                </span>
                <h3 className="mt-2 text-xl font-normal text-black">{post.title}</h3>
                {post.excerpt ? (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                ) : null}
                <a
                  href="#blog"
                  className="mt-4 inline-block text-[0.9rem] font-bold tracking-[0.1em] text-primary-600 uppercase transition-colors hover:text-black"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

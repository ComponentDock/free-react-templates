import { blogPosts } from '../data'

/** Blog section: centered "Our Blog" heading + two image post cards with
 *  title link, meta line, excerpt and a "Read More" link. */
export function Blog() {
  return (
    <section id="blog-section" data-testid="blog" className="bg-white py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="block-heading mb-5 text-center">
          <span className="eyebrow">News</span>
          <h2>Our Blog</h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} data-testid="blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-bold">
                <a href="#blog-section" className="text-black transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <span className="mt-1 block text-sm text-gray-500">{post.meta}</span>
              <p className="mt-2 text-body">{post.excerpt}</p>
              <a
                href="#blog-section"
                className="mt-2 inline-block text-sm font-bold text-brand hover:text-primary-600"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

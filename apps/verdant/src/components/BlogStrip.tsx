import { blogPosts } from '../data'

/** Recent Blog Posts — three media cards with photo, repeated title, meta
 *  line, blurb and Read More link. */
export function BlogStrip() {
  return (
    <section aria-label="Blog" className="bg-white py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="heading-underline font-heading text-center text-3xl font-semibold uppercase text-black">
          Recent Blog Posts
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={`${post.title}-${post.image}`} className="bg-white">
              <img
                src={post.image}
                alt="Blog post preview"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold uppercase text-black">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-black/50">{post.meta}</p>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </p>
                <a
                  href="#read-more"
                  className="mt-4 inline-block text-sm font-semibold text-primary"
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

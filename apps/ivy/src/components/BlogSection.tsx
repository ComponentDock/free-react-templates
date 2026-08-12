import { BLOG_POSTS } from '../data'

/**
 * BlogSection — light-gray section with a centered "Recent Blog" heading
 * and three blog cards: photo with an orange date block, meta, title and
 * a "Read more" link that turns orange on hover.
 */
export function BlogSection() {
  return (
    <section id="blog-section" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Recent Blog</h2>
          <p className="mt-4 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.image} className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="relative">
                <img src={post.image} alt="" aria-hidden="true" className="w-full" loading="lazy" />
                <span className="absolute left-4 top-4 flex flex-col items-center rounded-lg bg-primary px-3 py-2 text-white">
                  <span className="text-xl font-bold leading-none">{post.dateParts.day}</span>
                  <span className="text-xs font-semibold uppercase">{post.dateParts.month}</span>
                  <span className="text-xs">{post.dateParts.year}</span>
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500">{post.meta}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy transition-colors hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{post.blurb}</p>
                <a
                  href="#blog-section"
                  className="mt-3 inline-block font-semibold text-navy transition-colors hover:text-primary"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

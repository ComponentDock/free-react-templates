import { BLOG_HEADING, BLOG_INTRO, BLOG_POSTS } from '../data'

/**
 * Blog — light-grey section with a heading and two large article cards:
 * rounded image, orange title link, uppercase muted date/byline, excerpt,
 * and an orange link ("Get Started" / "Read More").
 */
export function Blog() {
  return (
    <section id="blog-section" aria-label="Our blog" className="bg-light py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-black md:text-6xl">
            {BLOG_HEADING}
          </h2>
          <p className="mt-5 text-gray-500">{BLOG_INTRO}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article key={post.title}>
              <a href="#blog-section" className="block">
                <img src={post.image} alt={post.title} className="w-full rounded object-cover" />
              </a>
              <h2 className="mt-5 font-display text-2xl uppercase tracking-[0.1rem]">
                <a href="#blog-section" className="text-primary-600 hover:text-primary-700">
                  {post.title}
                </a>
              </h2>
              <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
                {post.date} By <span className="text-gray-500">{post.author}</span>
              </p>
              <p className="mt-4 text-gray-500">{post.excerpt}</p>
              <a
                href="#blog-section"
                className="mt-3 inline-block font-bold text-primary-600 hover:text-primary-700"
              >
                {post.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

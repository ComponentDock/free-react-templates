import { BLOG_POSTS } from '../data'
import { SectionTitle } from './SectionTitle'

/* Latest news: three loan-advice posts with photo, date, title, excerpt and
   an underlined read-more link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Latest news" className="bg-white py-[110px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Latest News" />
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title}>
              <img
                src={post.image}
                alt=""
                loading="lazy"
                className="mb-[25px] aspect-[16/10] w-full object-cover"
              />
              <span className="mb-[14px] block text-meta">{post.date}</span>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4]">{post.title}</h3>
              <p className="mb-6 text-lg font-medium leading-[1.6] text-body">{post.excerpt}</p>
              <a
                href="#blog"
                className="font-semibold text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-brand"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

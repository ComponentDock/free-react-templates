import { blogPosts } from '../data'
import { SectionHeading } from './SectionHeading'

/** Our Blog (reference `.custom-media`): red-bar heading plus two posts —
 *  image, small red date pill, title, excerpt and a "Read more" link. */
export function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.title} className="flex flex-col gap-6 md:flex-row">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[4/3] w-full object-cover md:w-1/2"
            />
            <div className="md:w-1/2">
              <span className="inline-block bg-brand px-3 py-1 text-xs font-bold text-white">
                {post.date}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
              <a
                href="#blog"
                className="mt-4 inline-block text-sm font-bold text-white transition-colors hover:text-brand"
              >
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

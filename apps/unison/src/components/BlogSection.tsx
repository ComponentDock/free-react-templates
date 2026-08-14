import { blogPosts } from '../data'
import { SectionTitle } from './SectionTitle'

/** Blog row (`#blog-section`): 3 post cards with photo, title, author •
 *  date • category meta line, excerpt and a Continue Reading link. */
export function BlogSection() {
  return (
    <section id="blog-section" className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Our Blog</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <a href="#blog-section" className="block overflow-hidden rounded-lg">
                <img
                  src={post.photo}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <h3 className="mt-4">
                <a href="#blog-section" className="text-lg font-bold text-heading hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {post.author} • {post.date} • {post.category}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              <a
                href="#blog-section"
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                Continue Reading...
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

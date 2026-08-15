import { blogPosts, blogTitle, readMoreLabel } from '../data'

export function BlogSection() {
  return (
    <section id="blog-section" className="bg-blog px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold uppercase text-ink">{blogTitle}</h2>
        <ul className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.title} className="flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <p className="mt-6 text-sm text-muted">{post.meta}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <a
                href="#contact-section"
                className="mt-4 text-sm text-muted underline-offset-2 hover:text-brand hover:underline"
              >
                {readMoreLabel}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

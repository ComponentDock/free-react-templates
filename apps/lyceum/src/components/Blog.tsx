import { blogHeading, blogLabel, blogParagraph, blogPosts } from '../data'

export function Blog() {
  return (
    <section aria-label={blogLabel} className="py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-[75px] max-w-[680px] text-center">
          <h2 className="mb-3 font-heading text-4xl text-ink">{blogHeading}</h2>
          <p className="text-sm leading-6 text-muted">{blogParagraph}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <img
                src={`https://picsum.photos/seed/${post.seed}/420/280`}
                alt=""
                className="w-full object-cover"
              />
              <p className="mt-5 text-[13px] text-muted">
                {post.date} | By {post.author}
              </p>
              <h3 className="mb-5 mt-[15px] border-b border-border-soft pb-5 text-lg leading-6 text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{post.snippet}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

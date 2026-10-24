import { blogHeading, blogImageAlt, blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white pb-24 pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-heading sm:text-5xl">{blogHeading}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-lg border border-card-border bg-white"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/570/420`}
                alt={blogImageAlt(index)}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-7">
                <h3 className="font-serif text-xl font-medium leading-7 text-heading">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {post.author} · {post.category}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">{post.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

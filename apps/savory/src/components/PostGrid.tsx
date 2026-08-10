import { gridPosts, postImage } from '../data'

export function PostGrid() {
  return (
    <section aria-label="Latest posts">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gridPosts.map((post) => (
          <article key={post.title} className="group">
            <a href="#posts" className="block overflow-hidden">
              <img
                src={postImage(post.seed, 400, 300)}
                alt={post.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-4 text-xs font-semibold tracking-widest text-brand uppercase">
              {post.tag}
            </p>
            <h3 className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-brand">
              <a href="#posts">{post.title}</a>
            </h3>
            <p className="mt-2 text-xs font-semibold tracking-widest text-meta uppercase">
              {post.date} / By {post.author}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

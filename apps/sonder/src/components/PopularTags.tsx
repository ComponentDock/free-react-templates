import { popularPosts, tagCloud } from '../data'

const chipClasses =
  'inline-block bg-chip px-5 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-meta-2 transition-colors hover:bg-brand hover:text-white'

/** White strip with a 2-column Popular Posts list and a Tags chip cloud
    (reference: .s-extra on the Philosophy preview). */
export function PopularTags() {
  return (
    <section aria-label="Popular posts and tags" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">Popular Posts</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {popularPosts.map((post) => (
              <li key={post.seed}>
                <a href={`#${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/300/300`}
                    alt=""
                    className="h-28 w-full object-cover"
                  />
                  <h3 className="mt-4 font-serif text-base leading-snug text-ink transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-meta">
                    By {post.author} on {post.date}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Tags</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {tagCloud.map((tag) => (
              <a key={tag} href={`#${tag.toLowerCase()}`} className={chipClasses}>
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

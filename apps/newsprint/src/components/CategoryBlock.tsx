import { PostMeta } from './PostMeta'
import { imgUrl, categoryBlocks } from '../data'

/** Sports + Business category blocks, each a small post list. */
export function CategoryBlock() {
  return (
    <section aria-label="Categories" className="mx-auto max-w-6xl px-4 pb-12 lg:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        {categoryBlocks.map((block) => (
          <div key={block.heading}>
            <h2 className="mb-5 text-xl font-bold text-ink">
              <a href="#top" className="transition-colors hover:text-accent">
                {block.heading}
              </a>
            </h2>
            <ul className="space-y-5">
              {block.posts.map((post) => (
                <li key={post.seed}>
                  <article className="group flex gap-4">
                    <a href="#top" className="shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={imgUrl(post.seed, 120, 120)}
                        alt=""
                        className="h-20 w-20 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                    <div>
                      <PostMeta post={post} className="text-[11px]" />
                      <h3 className="mt-1 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                        <a href="#top">{post.title}</a>
                      </h3>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

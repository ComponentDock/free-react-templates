import { categoryColumns, imgUrl } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'

/** Politics + Business category columns, each with a heading and post entries. */
export function CategoryColumns() {
  return (
    <section aria-label="Category news" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {categoryColumns.map((column) => (
            <div key={column.heading}>
              <SectionTitle>{column.heading}</SectionTitle>
              <ul className="mt-8 space-y-7">
                {column.posts.map((post) => (
                  <li key={post.seed} className="flex items-start gap-4">
                    <img
                      src={imgUrl(post.seed, 120, 90)}
                      alt=""
                      className="h-[90px] w-[120px] shrink-0 object-cover"
                    />
                    <div>
                      <h3 className="font-bold leading-snug text-ink">
                        <a href="#top" className="transition-colors hover:text-accent">
                          {post.title}
                        </a>
                      </h3>
                      <div className="mt-1.5">
                        <PostMeta post={post} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

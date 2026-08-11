import { cardImage, rowImage, smallColumns, smallSectionLabel } from '../data'
import { PostMeta } from './PostMeta'

/* Small videos area (reference `.small-videos-area`): three category columns
   (Fashion / Technology / July Top), each with a vertical featured card and
   horizontal thumbnail-left rows. */
export function SmallVideos() {
  return (
    <section aria-label={smallSectionLabel} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {smallColumns.map((column) => (
            <div key={column.heading}>
              <h2 className="mb-6 inline-block border-b-2 border-brand pb-1 font-display text-xl font-bold uppercase tracking-wide">
                {column.heading}
              </h2>
              <article className="mb-6">
                <a href="#">
                  <img
                    src={cardImage(column.featured)}
                    alt={column.featured.title}
                    className="mb-4 aspect-video w-full object-cover"
                  />
                </a>
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {column.featured.title}
                  </a>
                </h3>
                <div className="mt-2">
                  <PostMeta meta={column.featured.meta} />
                </div>
              </article>
              <ul className="flex flex-col gap-4">
                {column.rows.map((row) => (
                  <li key={row.title}>
                    <article className="flex gap-4">
                      <a href="#" className="shrink-0">
                        <img
                          src={rowImage(row)}
                          alt={row.title}
                          className="h-[70px] w-[100px] object-cover"
                        />
                      </a>
                      <div>
                        <h3 className="font-display text-sm font-bold leading-snug text-ink">
                          <a href="#" className="transition-colors hover:text-brand">
                            {row.title}
                          </a>
                        </h3>
                        <div className="mt-1.5">
                          <PostMeta meta={row.meta} />
                        </div>
                      </div>
                    </article>
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

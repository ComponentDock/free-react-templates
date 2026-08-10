import { Chip } from './Chip'
import { categoryColumns, imgUrl, viewAllLabel } from '../data'

export function CategoryColumns() {
  return (
    <section aria-label="Categories" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categoryColumns.map((column) => (
          <div key={column.heading}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-ink">{column.heading}</h2>
              <a
                href="#home"
                className="rounded bg-faint px-4 py-1 text-xs font-bold text-ink transition-colors hover:bg-fainter"
              >
                {viewAllLabel}
              </a>
            </div>

            {/* Large featured card */}
            <a href="#home" className="group block">
              <img
                src={imgUrl(column.featured.seed, 400, 250)}
                alt=""
                className="w-full rounded object-cover"
              />
              <div className="mt-3">
                <Chip label={column.featured.chipLabel} category={column.featured.category} />
                <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                  {column.featured.title}
                </h3>
                <p className="mt-2 text-[13px] text-meta">
                  {column.featured.author} &ndash; {column.featured.date}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-entry">{column.featured.excerpt}</p>
              </div>
            </a>

            {/* Three small rows */}
            <div className="mt-6 space-y-4">
              {column.small.map((post) => (
                <a key={post.seed} href="#home" className="group flex items-center gap-4">
                  <img
                    src={imgUrl(post.seed, 200, 140)}
                    alt=""
                    className="h-[70px] w-[100px] shrink-0 rounded object-cover"
                  />
                  <span>
                    <Chip label={post.chipLabel} category={post.category} />
                    <span className="mt-1 block font-serif text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-[13px] text-meta">{post.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

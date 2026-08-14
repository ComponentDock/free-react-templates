import { latestColumns } from '../data'

/** Three-column product list (Latest / Top Rated / Review) with six small
 *  product rows per column: thumbnail + title + price. */
export function LatestProducts() {
  return (
    <section aria-label="Latest products" className="bg-white pb-10">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {latestColumns.map((column) => (
          <div key={column.header}>
            <h4 className="mb-6 border-b-2 border-brand pb-3 text-xl font-bold text-ink">
              {column.header}
            </h4>
            <ul className="space-y-5">
              {column.items.map((item) => (
                <li key={item.name} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-20 w-20 shrink-0 object-cover"
                  />
                  <div>
                    <h6 className="text-sm font-bold text-ink">
                      <a
                        href="#shop"
                        onClick={(event) => event.preventDefault()}
                        className="hover:text-brand"
                      >
                        {item.name}
                      </a>
                    </h6>
                    <span className="text-sm text-muted">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

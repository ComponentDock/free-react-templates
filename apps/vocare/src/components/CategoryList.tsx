import { ChevronRight } from 'lucide-react'
import { JOB_CATEGORIES } from '../data'

/* "Top Categories" section: 4 columns × 4 category rows, each row with a
   22px name, an orange count badge on cream, "Open position" caption and
   a chevron that fades in on hover (peach background + blue text). */
const COLUMN_SIZE = 4

function chunk<T>(items: T[], size: number): T[][] {
  const columns: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    columns.push(items.slice(i, i + size))
  }
  return columns
}

export function CategoryList() {
  const columns = chunk(JOB_CATEGORIES, COLUMN_SIZE)

  return (
    <section className="bg-white py-[6em]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[2px] text-brand">
          Job Categories
        </p>
        <h2 className="mt-2 text-[28px] font-medium text-black md:text-[38px]">Top Categories</h2>

        <div className="mt-12 grid gap-x-10 text-left sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((category) => (
                <li key={category.name}>
                  <a
                    href="#"
                    className="group flex items-center justify-between border-b border-peach px-[15px] py-[10px] transition-colors hover:bg-peach"
                  >
                    <span className="text-[22px] text-[#1a1a1a] transition-colors group-hover:text-brand">
                      {category.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="rounded-[5px] bg-cream px-2 py-0.5 text-[16px] font-semibold text-accent">
                        {category.count}
                      </span>
                      <span className="text-[15px] text-black/30">Open position</span>
                      <ChevronRight
                        className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

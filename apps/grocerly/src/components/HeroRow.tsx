import { useState } from 'react'
import { ChevronDown, Phone, Search } from 'lucide-react'
import { departments } from '../data'

/** Hero row: green "All departments" dropdown, search bar with category
 *  select + SEARCH button, and the support-phone block. */
export function HeroRow() {
  const [departmentsOpen, setDepartmentsOpen] = useState(false)

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1140px] gap-6 px-4 py-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-3">
          <div className="relative">
            <button
              type="button"
              aria-label="All departments"
              aria-expanded={departmentsOpen}
              onClick={() => setDepartmentsOpen((open) => !open)}
              className="flex w-full items-center justify-between bg-brand px-5 py-4 text-left text-sm font-bold uppercase text-white"
            >
              All departments
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
            {departmentsOpen && (
              <ul className="absolute left-0 right-0 top-full z-30 border border-line bg-white shadow-md">
                {departments.map((department) => (
                  <li key={department}>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault()
                        setDepartmentsOpen(false)
                      }}
                      className="block border-b border-line px-5 py-2.5 text-sm text-muted transition-colors hover:bg-topbar hover:text-brand"
                    >
                      {department}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-stretch md:col-span-6">
          <input
            type="search"
            aria-label="Search products"
            placeholder="What do you need?"
            className="w-full border border-line px-5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
          />
          <select
            aria-label="All Categories"
            defaultValue="all"
            className="hidden border border-l-0 border-line bg-white px-3 text-sm text-muted outline-none focus:border-brand sm:block"
          >
            <option value="all">All Categories</option>
            {departments.slice(0, 5).map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="flex items-center gap-2 bg-brand px-7 text-sm font-extrabold uppercase text-white transition-colors hover:bg-primary-700"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
            SEARCH
          </button>
        </div>

        <div className="flex items-center gap-3 md:col-span-3">
          <Phone aria-hidden="true" className="h-10 w-10 shrink-0 text-brand" />
          <div>
            <h5 className="text-lg font-bold text-ink">+65 11.188.888</h5>
            <span className="text-sm text-muted">support 24/7 time</span>
          </div>
        </div>
      </div>
    </div>
  )
}

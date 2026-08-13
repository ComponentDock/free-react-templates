import { ButtonLink } from '@free-react-templates/ui'
import { MENU_COLUMNS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * MenuSection — "Specialties / Our Menu" (source `section.ftco-section` with
 * six `.menu-wrap` columns): each column carries a 22px heading (Breakfast,
 * Lunch, Dinner, Desserts, Wine Card, Drinks) and three dish rows — an 80px
 * circular photo, the dish name and a right-aligned price, separated by a
 * 1px dashed #e6e6e6 divider. A centered black "View All Menu" button closes
 * the section.
 */
export function MenuSection() {
  return (
    <section id="menu" className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading script="Specialties" title="Our Menu" />
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {MENU_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-center text-[22px] font-semibold text-ink">{column.heading}</h3>
              <ul className="mt-6">
                {column.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-5 border-b border-dashed border-divider pb-5 pt-2 first:pt-0"
                  >
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-full object-cover"
                    />
                    <div className="flex w-full items-baseline justify-between gap-3">
                      <span className="text-base text-ink">{item.name}</span>
                      <span className="text-base font-medium text-brand">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <ButtonLink
            href="#menu"
            variant="outline"
            className="rounded border-transparent bg-ink px-10 py-3 text-white hover:bg-black"
          >
            View All Menu
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

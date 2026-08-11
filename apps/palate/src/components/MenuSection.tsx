import { MENU_CATEGORIES, MENU_SCRIPT, MENU_TITLE } from '../data'
import { SectionHeading } from './SectionHeading'

/* .menu-wrap — "Our Menu": 6 category columns (3-up lg / 2-up md /
   stacked), each with a 30px/900 category name and 3 items: 100×100px
   circular cover photo, 24px/500 dish title, 20px/600 $29 price,
   ingredient tags. */
export function MenuSection() {
  return (
    <section id="menu" className="px-4 py-28">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading script={MENU_SCRIPT} title={MENU_TITLE} />

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {MENU_CATEGORIES.map((category) => (
            <div key={category.name} className="text-center">
              <h3 className="mb-6 text-[30px] font-black text-ink">{category.name}</h3>
              <ul className="space-y-8">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-4 text-left">
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/200/200`}
                      alt=""
                      className="h-[100px] w-[100px] shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="text-[24px] font-medium text-ink">{item.name}</h4>
                        <span className="text-[20px] font-semibold text-ink">{item.price}</span>
                      </div>
                      <p className="mt-1 text-[14px] text-body">{item.tags.join(', ')}</p>
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

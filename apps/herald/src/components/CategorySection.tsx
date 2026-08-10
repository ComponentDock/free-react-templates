import type { CategoryNews } from '../data'
import { imgUrl } from '../data'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'

interface CategorySectionProps {
  category: CategoryNews
}

/** POLITICS / SPORT card: lead image + headline + excerpt + four mini headlines. */
export function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
      <SectionTitle title={category.title} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <img
          src={imgUrl(category.lead.seed, 400, 300)}
          alt={category.lead.headline}
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <a href="#" className="block">
            <h4 className="font-heading text-base font-semibold text-[#111] transition-colors hover:text-primary">
              {category.lead.headline}
            </h4>
          </a>
          <div className="mt-3">
            <MetaRow meta={category.lead.meta} />
          </div>
          <p className="mt-3 text-sm leading-6 text-[#555]">{category.excerpt}</p>
        </div>
      </div>
      <div className="my-[30px] border-t border-[#ddd]" />
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {category.mini.map((mini) => (
          <div key={mini.seed} className="border-l-2 border-[#ccc] pl-5">
            <a href="#" className="block">
              <h5 className="font-heading text-sm font-semibold text-[#111] transition-colors hover:text-primary">
                {mini.headline}
              </h5>
            </a>
            <div className="mt-2">
              <MetaRow meta={mini.meta} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { gridCategories, imgUrl } from '../data'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'

/** 2x2 grid of LIFESTYLE / BUSINESS / CULTURE / TECH cards. */
export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
      {gridCategories.map((category) => (
        <div
          key={category.title}
          className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]"
        >
          <SectionTitle title={category.title} />
          <img
            src={imgUrl(category.seed, 400, 300)}
            alt={category.headline}
            loading="lazy"
            className="w-full object-cover"
          />
          <a href="#" className="mt-[30px] block">
            <h4 className="font-heading text-base font-semibold text-[#111] transition-colors hover:text-primary">
              {category.headline}
            </h4>
          </a>
          <div className="mt-3">
            <MetaRow meta={category.meta} />
          </div>
          <div className="my-4 border-t border-[#ddd]" />
          {category.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-2.5 text-sm leading-6 text-[#555]">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

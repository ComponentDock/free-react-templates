import {
  adImgAlt,
  adLabel,
  adImage,
  badgeColor,
  categoriesHeading,
  categoryCounts,
  categoryLinkClass,
  tags,
} from '../data'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

/* Reference ad box: bordered placeholder with an image, inside the second
   posts section's main column. */
export function AdBox() {
  return (
    <div className="border border-line p-2">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-muted">
        {adLabel}
      </p>
      <img src={adImage} alt={adImgAlt} className="mx-auto h-[250px] w-[300px] object-cover" />
    </div>
  )
}

/* Reference `.category-widget`: category links tinted with their cat color
   and a colored count span (Web Design 340 / JavaScript 74 / TypeScript 41 /
   CSS 35). */
export function CategoriesWidget() {
  return (
    <div>
      <SectionTitle title={categoriesHeading} />
      <ul className="flex flex-col gap-3">
        {categoryCounts.map((cat) => (
          <li key={cat.name}>
            <a
              href="#"
              className={cn(
                'flex items-center justify-between text-sm font-semibold transition-colors',
                categoryLinkClass[cat.categoryId],
              )}
            >
              <span>{cat.name}</span>
              <span
                className={cn(
                  'rounded px-2 py-0.5 text-xs font-bold text-white',
                  badgeColor(cat.categoryId),
                )}
              >
                {cat.count}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Reference `.tags-widget`: tag pill links. */
export function TagsWidget() {
  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <a
              href="#"
              className="rounded border border-line px-3 py-1.5 text-xs font-semibold text-body transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

import {
  Activity,
  BookOpen,
  Briefcase,
  FileCode,
  Globe,
  Megaphone,
  Monitor,
  Music,
  Network,
  Palette,
  PenTool,
} from 'lucide-react'
import { categories, sectionHeadings } from '../data'

const icons = {
  pen: PenTool,
  palette: Palette,
  monitor: Monitor,
  book: BookOpen,
  'file-code': FileCode,
  network: Network,
  activity: Activity,
  megaphone: Megaphone,
  music: Music,
  briefcase: Briefcase,
  globe: Globe,
} as const

export function Categories() {
  return (
    <section aria-label="Course categories" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.categoriesSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.categoriesTitle}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons]
            const isActive = category.title === 'Art & Design'
            return (
              <a
                key={category.title}
                href="#courses"
                data-category-active={isActive || undefined}
                className={`flex flex-col items-center rounded bg-white px-5 py-8 text-center shadow-[0_5px_25px_-2px_rgba(0,0,0,0.06)] transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive ? 'bg-brand text-white' : 'text-ink'
                }`}
              >
                <Icon className="h-[70px] w-[70px] p-3 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-medium leading-snug">{category.title}</h3>
                <span data-category-count className="mt-2 text-xs text-muted">
                  {category.count}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

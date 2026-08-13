import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { workCategories, workItems } from '../data'
import { SectionTitle } from './SectionTitle'

const workIntro =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.'

export function Works() {
  const [active, setActive] = useState('All Categories')
  const visible =
    active === 'All Categories' ? workItems : workItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="bg-mist py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Latest Works" intro={workIntro} />
        <div
          className="mb-12 flex flex-wrap justify-center gap-4"
          role="group"
          aria-label="Filter projects"
        >
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full px-5 py-2 font-sans text-sm font-medium capitalize transition-colors',
                active === category ? 'bg-brand text-white' : 'bg-white text-ink hover:text-brand',
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="work-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((work) => (
            <a
              key={work.title + work.image}
              href="#portfolio"
              onClick={(event) => event.preventDefault()}
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${work.image}/600/450`}
                alt={work.title}
                className="h-auto w-full rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="font-sans text-[21px] font-bold text-white">{work.title}</h3>
                <span className="mt-1 font-body text-[15px] text-white">{work.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

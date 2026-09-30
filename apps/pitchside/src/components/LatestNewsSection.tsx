import { useState } from 'react'
import { Calendar, Pencil } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { filterCategories, latestNews, ranking } from '../data'
import { SectionTitle } from './SectionTitle'

/** Latest news + Club Ranking (reference `.latest-section`): filterable
 *  news list on the left, league table sidebar on the right. */
export function LatestNewsSection() {
  const [category, setCategory] = useState<(typeof filterCategories)[number]>('All')
  const visible =
    category === 'All' ? latestNews : latestNews.filter((item) => item.tag === category)

  return (
    <section id="club" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionTitle
        actions={
          <div className="flex items-center gap-2">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setCategory(filter)}
                aria-pressed={category === filter}
                className={cn(
                  'px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors',
                  category === filter
                    ? 'bg-brand text-white'
                    : 'bg-tint text-page hover:bg-brand hover:text-white',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        }
      >
        Latest News
      </SectionTitle>

      <div className="grid gap-10 lg:grid-cols-3">
        <div id="latest" className="space-y-8 lg:col-span-2">
          {visible.map((item) => (
            <article key={item.title} className="flex flex-col gap-6 sm:flex-row">
              <div className="relative h-60 w-full shrink-0 sm:w-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-0 top-0 bg-brand px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
                  {item.tag}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-medium text-ink">
                  <a href="#latest" className="transition-colors hover:text-brand">
                    {item.title}
                  </a>
                </h4>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-meta">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Pencil className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {item.author}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <aside>
          <h4 className="mb-4 text-xl font-medium text-ink">Club Ranking</h4>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-tint text-meta">
                <th className="pb-2 font-normal">Pos</th>
                <th className="pb-2 font-normal">Team</th>
                <th className="pb-2 font-normal">P</th>
                <th className="pb-2 font-normal">W</th>
                <th className="pb-2 font-normal">L</th>
                <th className="pb-2 font-normal">PTS</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((row) => (
                <tr key={row.team} className="border-b border-tint">
                  <td className="py-2.5 text-muted">{row.pos}</td>
                  <td className="py-2.5">
                    <span className="flex items-center gap-2">
                      <img src={row.flag} alt="" className="h-4 w-6 shrink-0 object-cover" />
                      <span className="font-medium text-ink">{row.team}</span>
                    </span>
                  </td>
                  <td className="py-2.5 text-muted">{row.p}</td>
                  <td className="py-2.5 text-muted">{row.w}</td>
                  <td className="py-2.5 text-muted">{row.l}</td>
                  <td className="py-2.5 font-bold text-ink">{row.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </div>
    </section>
  )
}

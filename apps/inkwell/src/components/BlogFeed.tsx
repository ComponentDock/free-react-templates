import { ArrowRight, Calendar, MessageCircle, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const entries = [
  {
    seed: 'inkwell-1',
    title: 'Writing A Novel with A Heart',
    meta: 'Jan. 30, 2021',
    comments: '3 Comments',
  },
  {
    seed: 'inkwell-2',
    title: 'The Photographer’s Guide to Golden Hour',
    meta: 'Jan. 28, 2021',
    comments: '7 Comments',
  },
  {
    seed: 'inkwell-3',
    title: 'Coffee, Cameras and Quiet Mornings',
    meta: 'Jan. 25, 2021',
    comments: '2 Comments',
  },
  {
    seed: 'inkwell-4',
    title: 'Why I Sketch Before I Shoot',
    meta: 'Jan. 22, 2021',
    comments: '5 Comments',
  },
  {
    seed: 'inkwell-5',
    title: 'A Week Spent Off the Grid',
    meta: 'Jan. 18, 2021',
    comments: '11 Comments',
  },
  {
    seed: 'inkwell-6',
    title: 'Finding Light in the City Rain',
    meta: 'Jan. 15, 2021',
    comments: '4 Comments',
  },
  {
    seed: 'inkwell-7',
    title: 'The Stories Behind Old Portraits',
    meta: 'Jan. 12, 2021',
    comments: '9 Comments',
  },
] as const

const excerpt =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export function BlogFeed() {
  return (
    <section id="blog" className="bg-surface dark:bg-gray-900" aria-labelledby="blog-feed">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 py-10 lg:gap-24 lg:py-16">
          {entries.map((entry, index) => (
            <article key={entry.seed} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <div
                data-side={index % 2 === 1 ? 'right' : 'left'}
                className={cn('lg:col-span-7', index % 2 === 1 && 'lg:order-last')}
              >
                <img
                  src={`https://picsum.photos/seed/${entry.seed}/900/600`}
                  alt=""
                  className="h-[280px] w-full rounded-[4px] object-cover"
                />
              </div>
              <div className={cn('lg:col-span-5', index % 2 === 1 ? 'lg:pe-10' : 'lg:ps-10')}>
                <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-medium uppercase tracking-[2px] text-ink/80 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4 text-brand" aria-hidden="true" />
                    Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                    {entry.meta}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                    {entry.comments}
                  </span>
                </p>
                <h2 className="mt-5 font-sans text-4xl font-normal leading-[1.1] text-title underline decoration-ink/20 underline-offset-8 transition-colors hover:decoration-brand md:text-6xl xl:text-[72px] dark:text-gray-100 dark:decoration-gray-600 dark:hover:decoration-brand">
                  <a
                    href="#blog"
                    className="transition-colors hover:text-ink dark:hover:text-white"
                  >
                    {entry.title}
                  </a>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted dark:text-gray-400">
                  {excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[2px] text-title transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

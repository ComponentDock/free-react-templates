import { cn } from '@free-react-templates/ui'

interface PortfolioItemProps {
  category: string
  title: string
  description: string
  authorName: string
  authorSite: string
  imageSeed: string
  reversed?: boolean
}

function PortfolioItem({
  category,
  title,
  description,
  authorName,
  authorSite,
  imageSeed,
  reversed,
}: PortfolioItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-8 lg:flex-row',
        reversed && 'lg:flex-row-reverse',
      )}
    >
      <div className="w-full lg:w-2/5">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/600/400`}
          alt={`${title} project preview`}
          className="h-64 w-full rounded-lg object-cover sm:h-80"
          loading="lazy"
        />
      </div>
      <div className={cn('w-full lg:w-3/5', reversed ? 'text-right lg:text-right' : 'text-left')}>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">{category}</p>
        <h3 className="mb-4 text-2xl font-bold text-ink">{title}</h3>
        <p className="mb-6 text-muted">{description}</p>
        <div className={cn('mb-4 flex items-center gap-3', reversed && 'justify-end')}>
          <img
            src={`https://picsum.photos/seed/${authorName}/80/80`}
            alt={`${authorName} avatar`}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-bold text-ink">{authorName}</p>
            <p className="text-xs text-muted">{authorSite}</p>
          </div>
        </div>
        <a
          href="#portfolio"
          className={cn(
            'inline-block rounded-full border-2 border-brand px-6 py-2 text-sm font-bold text-brand',
            'transition-colors hover:bg-brand hover:text-white',
          )}
        >
          View Portfolio
        </a>
      </div>
    </div>
  )
}

const works = [
  {
    category: 'Web Design',
    title: 'Cassette Tape',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    authorName: 'Jamie Jonson',
    authorSite: 'minima.com',
    imageSeed: 'minima-work1',
  },
  {
    category: 'Application',
    title: 'Miniwall Clock',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    authorName: 'Jamie Jonson',
    authorSite: 'minima.com',
    imageSeed: 'minima-work2',
    reversed: true,
  },
  {
    category: 'Branding',
    title: 'Mobile App Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    authorName: 'Jamie Jonson',
    authorSite: 'minima.com',
    imageSeed: 'minima-work3',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-extrabold text-ink">Our Works</h2>
        <div className="space-y-16">
          {works.map((work) => (
            <PortfolioItem key={work.title} {...work} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Podcaster {
  name: string
  count: string
  avatar: string
}

interface Episode {
  number: string
  title: string
  image: string
  byline: string
}

const PODCASTERS: Podcaster[] = [
  {
    name: 'Claire Stanford',
    count: '32,420 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p1/100/100',
  },
  {
    name: 'Dianne Winston',
    count: '12,381 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p2/100/100',
  },
  {
    name: 'Borris Larry',
    count: '9,291 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p3/100/100',
  },
  {
    name: 'Garry Smith',
    count: '3,291 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p4/100/100',
  },
  {
    name: 'Gerson Stack',
    count: '1,092 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p5/100/100',
  },
  {
    name: 'Jenna Stone',
    count: '911 podcasts',
    avatar: 'https://picsum.photos/seed/wavecast-p6/100/100',
  },
]

const EPISODES: Episode[] = ['08', '07', '06', '05', '04'].map((number) => ({
  number,
  title: 'How To Create Web Page Using Bootstrap 4',
  image: `https://picsum.photos/seed/wavecast-${number}/600/400`,
  byline: 'By Mike Smith / 16 September 2017 / 1:30:20',
}))

const PAGE_NUMBERS = [1, 2, 3, 4, 5]

export function Episodes() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:flex-row">
        <aside className="lg:w-1/4">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-dark">
            Popular Podcaster
          </h3>
          <ul className="space-y-5">
            {PODCASTERS.map((podcaster) => (
              <li key={podcaster.name}>
                <a href="#" className="flex items-center gap-3">
                  <img
                    src={podcaster.avatar}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <span className="text-black/50 transition-colors hover:text-black">
                    <span className="block">{podcaster.name}</span>
                    <span className="block text-xs text-muted">{podcaster.count}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="lg:w-3/4">
          <div className="space-y-8">
            {EPISODES.map((episode) => (
              <article
                key={episode.number}
                className="flex flex-col overflow-hidden rounded-[4px] bg-white shadow-[0_5px_40px_-10px_rgba(0,0,0,0.1)] md:flex-row"
              >
                <div className="h-[300px] w-full shrink-0 bg-cover bg-center md:h-auto md:w-[300px]">
                  <img src={episode.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-10">
                  <h3 className="text-[28px] font-light leading-snug">
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Episode {episode.number}: {episode.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm text-ink">
                    By Mike Smith{' '}
                    <span aria-hidden="true" className="mx-[5px] text-muted">
                      /
                    </span>{' '}
                    16 September 2017{' '}
                    <span aria-hidden="true" className="mx-[5px] text-muted">
                      /
                    </span>{' '}
                    1:30:20
                  </p>
                  <audio controls preload="none" className="audio-dark mt-6 h-10 w-full" />
                </div>
              </article>
            ))}
          </div>

          <nav aria-label="Episodes pagination" className="mt-12">
            <ul className="flex items-center justify-center gap-3">
              {PAGE_NUMBERS.map((page) => (
                <li key={page}>
                  <a
                    href="#"
                    aria-current={page === 1 ? 'true' : undefined}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors',
                      page === 1
                        ? 'bg-primary-600 text-white'
                        : 'border border-line text-dark hover:bg-primary-600 hover:text-white',
                    )}
                  >
                    {page}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  aria-label="Next page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-dark transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
